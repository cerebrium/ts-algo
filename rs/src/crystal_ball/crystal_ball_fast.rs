pub fn c_b_fast(nums: &Vec<usize>) -> usize {
    println!("inside herer");
    let jump = (nums.len() as f64).sqrt().round() as usize;
    let mut current_leap = 0;

    loop {
        if current_leap > nums.len() {
            break;
        }

        if nums[current_leap] == 1 {
            break;
        }

        current_leap += jump;
    }

    if current_leap > nums.len() {
        for i in nums[nums.len() - current_leap]..nums.len() {
            if nums[i] == 1 {
                return i;
            }
        }
    }

    for i in nums[current_leap]..nums.len() {
        if nums[i] == 1 {
            return i;
        }
    }

    0
}
