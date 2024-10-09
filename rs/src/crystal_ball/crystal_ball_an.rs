pub fn crystal_ball(nums: &Vec<i8>) -> usize {
    println!("this test is running: {}", nums.len());
    for i in 0..nums.len() {
        println!("i is: {}", i);
        if nums[i] == 1 {
            return i;
        }
    }

    0
}
