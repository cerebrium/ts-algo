import {open} from 'node:fs/promises';
const path = require('node:path');

interface WrongObjCount {
  [key: string]: number;
}

interface WrongObj {
  [key: string]: WrongObjCount;
}

async function main() {
  const file_path = path.join(
    __dirname,
    '/..',
    '/..',
    '/..',
    '/..',
    '/assets',
    '/t.csv'
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
    if (_id.includes('M00')) {
      console.log('moooooooo dcr: ', dcr_val);
    }
    switch (true) {
      case dcr_val >= 99:
        dcr_val = fantastic;
        break;
      case dcr_val >= 98.5:
        dcr_val = great;
        break;
      case dcr_val >= 98:
        dcr_val = fair;
        break;
      default:
        dcr_val = poor;
    }

    /*
     * DNR DPMO < 1100 = 4
     * DNR DPMO < 1300 = 3
     * DNR DPMO < 1700 = 2
     * DNR DPMO > 1700 = 1
     */

    let dnr_dpmo_val = dnr_dpmo == '-' ? 0 : Number(dnr_dpmo);
    switch (true) {
      case dnr_dpmo_val < 1100:
        dnr_dpmo_val = fantastic;
        break;
      case dnr_dpmo_val < 1300:
        dnr_dpmo_val = great;
        break;
      case dnr_dpmo_val < 1700:
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

    let pod_val = pod == '-' ? 100 : Number(pod.split('%')[0]);
    switch (true) {
      case pod_val > 99:
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

    current_rating += Number((dcr_val * 0.25).toFixed(2));
    current_rating += Number((dnr_dpmo_val * 0.25).toFixed(2));
    current_rating += Number((ce_val * 0.2).toFixed(2));
    current_rating += Number((pod_val * 0.1).toFixed(2));
    current_rating += Number((cc_val * 0.1).toFixed(2));
    current_rating += Number((dex_val * 0.1).toFixed(2));

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
    case rating > 18.55:
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
