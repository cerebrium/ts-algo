/**
 *
 * Imagine you have a dynamic number of rows:
 * The columns for these rows are as follows - CustomerId<int>
 *  BirdType<enum>
 *  RangerId<int?>
 *  RangerStatus<enum>.
 *
 *  Each row is unique in terms of:
 *  CustomerId,
 *  BirdType
 *  and RangerId
 *
 * The RangerStatus enum has 3 possible values:
 *  - NONE (means RangerId will be null)
 *  - UNRESTRICTED (has a RangerId)
 *  - RESTRICTED (has a RangerId).
 *
 * Find the combination of all rows that are considered 'plannable' together.  The rules for what is 'plannable' follows:
 *
 * - Rows with different customerIds cannot be planned together.
 * - Rows with different BirdType cannot be planned together.
 * - Rows where RangerStatus=NONE can be planned with any other rows of the similar type (customerId, BirdType).
 * - Rows where RangerStatus=UNRESTRICTED can be planned with NONE rows or other UNRESTRICTED rows (given same customerId/BirdType)
 * - Rows where RangerStatus=RESTRICTED can only be planned with NONE rows (given same customerId/BirdType)
 *
 * Return the combination of plannable rows.
 *
 */

enum RangerStatus {
  NONE = 0,
  UNRESTRICTED = 'unrestricted',
  RESTRICTED = 'restricted',
}

enum BirdTpes {
  DUCK = 'duck',
  GOOSE = 'goose',
  EAGLE = 'eagle',
  PIDGEON = 'pidgeon',
}

type RowData = {
  cusomerId: string;
  rangerId: string;
  birdType: BirdTpes;
  rangerStatus: RangerStatus;
};

class RowFactory {
  currentRangerId = 9999;
  currentCustomerId = 1111;

  birdMap = {
    0: BirdTpes.DUCK,
    1: BirdTpes.GOOSE,
    2: BirdTpes.EAGLE,
    3: BirdTpes.PIDGEON,
  };

  data = [];

  constructor() {}

  createRow() {
    const birdRef = Math.floor(Math.random() * 4);

    const rowData = {
      customerId: 'c' + this.currentCustomerId,
      rangerId: 'r' + this.currentRangerId,
      BirdTpes: birdRef,
    };

    this.currentCustomerId++;
    this.currentCustomerId++;
  }

  createNewRowInstance() {}
}
