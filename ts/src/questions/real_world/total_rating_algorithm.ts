import {open} from 'node:fs/promises';
const path = require('node:path');
const readline = require('node:readline');

interface WrongObjCount {
  [key: string]: number;
}

interface WrongObj {
  [key: string]: WrongObjCount;
}

interface PercentMap {
  [key: string]: number;
}

async function main() {
  // const rl = readline.createInterface({
  //   input: process.stdin,
  //   output: process.stdout,
  // });
  // rl.question(
  //   `Which station is this?\n`,
  //   async (station: string): Promise<void> => {
  //     console.log(`Calulation for staion: ${station}`);
  //     await calculate_statuses(station);
  //     rl.close();
  //   }
  // );
  await calculate_statuses('DSN1');
}

const percent_map: PercentMap = {
  dcr_val: 0.25,
  dnr_dpmo_val: 0.25,
  ce_val: 0.2,
  pod_val: 0.1,
  cc_val: 0.1,
  dex_val: 0.1,
};

async function calculate_statuses(station: string): Promise<void> {
  let dnr_fan = 1100;
  let dnr_great = 1100;
  let dnr_fair = 1100;

  switch (station) {
    case 'DRG2':
      dnr_fan = 1100;
      dnr_great = 1300;
      dnr_fair = 1650;
      break;
    case 'DSN1':
      dnr_fan = 1100;
      dnr_great = 1300;
      dnr_fair = 1700;
      break;
    case 'DBS3':
      dnr_fan = 1300;
      dnr_great = 1550;
      dnr_fair = 2000;
      break;
    case 'DBS2':
      dnr_fan = 1400;
      dnr_great = 1650;
      dnr_fair = 2100;
      break;
    case 'DEX2':
      dnr_fan = 1050;
      dnr_great = 1250;
      dnr_fair = 1600;
      break;
    case 'DCF1':
      dnr_fan = 1200;
      dnr_great = 1400;
      dnr_fair = 1800;
      break;
    case 'DSA1':
      dnr_fan = 1200;
      dnr_great = 1400;
      dnr_fair = 1850;
      break;
    default:
      throw new Error(
        'Station is not valid, please choose: DRG2, DSN1, DBS3, DBS2, DEX2, DCF1, DSA1'
      );
  }
  const file_path = path.join(
    __dirname,
    '/..',
    '/..',
    '/..',
    '/..',
    '/assets',
    '/DSN1.csv'
  );

  const file = await open(file_path);
  let current_rating = 0;

  let total_count = 0;
  let wrong_count = 0;

  const wrong_obj: WrongObj = {};

  const fantastic = 20;
  const great = 16;
  const fair = 14;
  const poor = 11;
  for await (const line of file.readLines()) {
    const dont_include = [];
    total_count++;
    current_rating = 0;
    const [
      _id,
      status,
      _total_score,
      _delivered,
      dcr,
      dnr_dpmo,
      pod,
      cc,
      ce,
      dex,
      _focus_ares,
    ] = line.split(',');

    if (!dcr) {
      continue;
    }
    let dcr_val = Number(dcr.split('%')[0]);
    if (_id.includes('GBWC')) {
      console.log('DCR VAL: ', dcr_val);
    }
    switch (true) {
      case dcr_val >= 99:
        dcr_val = fantastic;
        break;
      case dcr_val >= 98.75:
        dcr_val = great;
        break;
      case dcr_val >= 98:
        dcr_val = fair;
        break;
      default:
        dcr_val = poor;
    }

    if (dnr_dpmo == '-') {
      dont_include.push('dnr_dpmo_val');
    }
    let dnr_dpmo_val = dnr_dpmo == '-' ? 0 : Number(dnr_dpmo);
    switch (true) {
      case dnr_dpmo_val < dnr_fan:
        dnr_dpmo_val = fantastic;
        break;
      case dnr_dpmo_val < dnr_great:
        dnr_dpmo_val = great;
        break;
      case dnr_dpmo_val < dnr_fair:
        dnr_dpmo_val = fair;
        break;
      default:
        dnr_dpmo_val = poor;
    }

    /*
     * POD > 99 = 4
     * POD > 98 = 3
     * POD > 97 = 2
     * POD > -1 = 1
     */

    if (pod == '-') {
      dont_include.push('pod_val');
    }
    let pod_val = pod == '-' ? 100 : Number(pod.split('%')[0]);
    if (_id.includes('BA0N')) {
      console.log('pod val: ', pod_val);
    }
    switch (true) {
      case pod_val > 98.9:
        pod_val = fantastic;
        break;
      case pod_val > 98:
        pod_val = great;
        break;
      case pod_val > 97:
        pod_val = fair;
        break;
      default:
        pod_val = poor;
    }

    /*
     * CC > 98 = 4
     * CC > 95 = 3
     * CC > 90 = 2
     * CC > -1 = 1
     */
    if (cc == '-') {
      dont_include.push('cc_val');
    }
    let cc_val = cc == '-' ? 100 : Number(cc.split('%')[0]);
    switch (true) {
      case cc_val > 98:
        cc_val = fantastic;
        break;
      case cc_val > 95:
        cc_val = great;
        break;
      case cc_val > 90:
        cc_val = fair;
        break;
      default:
        cc_val = poor;
    }

    /*
     * DEX > 87 = 4
     * DEX > 83 = 3
     * DEX > 80 = 2
     * DEX > -1 = 1
     */
    if (dex == '-') {
      dont_include.push('dex_val');
    }
    let dex_val = dex == '-' ? 100 : Number(dex.split('%')[0]);
    switch (true) {
      case dex_val > 87:
        dex_val = fantastic;
        break;
      case dex_val > 83:
        dex_val = great;
        break;
      case dex_val > 80:
        dex_val = fair;
        break;
      default:
        dex_val = poor;
    }

    let ce_val = Number(ce);
    if (ce_val === 0) {
      ce_val = fantastic;
    } else {
      ce_val = poor;
    }

    /*
       DCR = 12.5% 
       DNR DPMO = 12.5%
       CE = 10%
       POD = 5%
       CC = 5%
       DEX = 5%
      
      total is 50%

      doubling the vals to get a nice 100%
      
    */

    let missing_fields = 0;
    let missing_percent = 0;
    const options = [
      'dcr_val',
      'dnr_dpmo_val',
      'ce_val',
      'pod_val',
      'cc_val',
      'dex_val',
    ];

    for (let i = 0; i < options.length; i++) {
      if (dont_include.includes(options[i])) {
        missing_fields++;
        missing_percent += percent_map[options[i]];
      }
    }

    const multiplicative = Number((1 / (1 - missing_percent)).toFixed(5));

    if (!dont_include.includes('dcr_val')) {
      current_rating += Number((dcr_val * (0.25 * multiplicative)).toFixed(2));
    }
    if (!dont_include.includes('dnr_dpmo_val')) {
      current_rating += Number(
        (dnr_dpmo_val * (0.25 * multiplicative)).toFixed(2)
      );
    }
    if (!dont_include.includes('ce_val')) {
      current_rating += Number((ce_val * (0.2 * multiplicative)).toFixed(2));
    }
    if (!dont_include.includes('pod_val')) {
      current_rating += Number((pod_val * (0.1 * multiplicative)).toFixed(2));
    }
    if (!dont_include.includes('cc_val')) {
      current_rating += Number((cc_val * (0.1 * multiplicative)).toFixed(2));
    }
    if (!dont_include.includes('dex_val')) {
      current_rating += Number((dex_val * (0.1 * multiplicative)).toFixed(2));
    }

    let computed_status = determine_status(current_rating);
    if (computed_status !== status) {
      console.log(
        'computed: ',
        computed_status,
        '\tstatus: ',
        status,
        '\t rating: ',
        current_rating,
        '\t total: ',
        _total_score,
        '\tid: ',
        _id
      );
      console.log(
        'stats\t dcr: \t ',
        dcr_val,
        'dnr: \t',
        dnr_dpmo_val,
        'pod: \t',
        pod_val,
        'cc: \t',
        cc_val,
        'ce: \t',
        ce_val,
        'dex: \t',
        dex_val,
        '\n ---------------------------------------------------- \n'
      );

      if (wrong_obj[computed_status]) {
        if (wrong_obj[computed_status][status]) {
          wrong_obj[computed_status][status]++;
        } else {
          wrong_obj[computed_status][status] = 1;
        }
      } else {
        wrong_obj[computed_status] = {};
        wrong_obj[computed_status][status] = 1;
      }
      wrong_count++;
    }
  }

  console.log(
    'total count: ',
    total_count,
    '\n wrong count: ',
    wrong_count,
    '\n wrong obj: ',
    wrong_obj
  );
}
function determine_status(rating: number): string {
  switch (true) {
    case rating > 18.62:
      return 'FANTASTIC_PLUS';
    case rating > 17.8:
      return 'FANTASTIC';
    case rating > 17.3:
      return 'GREAT';
    case rating > 15.6:
      return 'FAIR';
    default:
      return 'POOR';
  }
}
main();

// // DCR -> delivery completion rate
// // DNR DPMO -> Delivery not recieved, deliveries per million opportunities
//
//
//
//  ALL POSSIBLE FANTASTIC_PLUS IN THIS
//function determine_status(rating: number): string {
//   switch (true) {
//     case rating > 17.55:
//       return 'FANTASTIC_PLUS';
//     case rating > 17.8:
//       return 'FANTASTIC';
//     case rating > 17.3:
//       return 'GREAT';
//     case rating > 15.6:
//       return 'FAIR';
//     default:
//       return 'POOR';
//   }
// }
