mod crystal_ball;

#[cfg(test)]
mod tests {
    use crate::crystal_ball::crystal_ball_an::crystal_ball;
    use crate::crystal_ball::crystal_ball_fast::c_b_fast;

    #[test]
    fn crystal_ball_slow() {
        let size = 900000000;
        let mut nums_large = Vec::with_capacity(size);

        for i in 0..size {
            println!("inside the loop: {}", i);
            if i < size - 400 {
                nums_large[i] = 0 as i8;
                continue;
            }

            nums_large[i] = 1
        }

        let nums = vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];
        let result = crystal_ball(&nums);

        assert_eq!(result, 9);

        let large_result = crystal_ball(&nums_large);

        assert_eq!(large_result, size - 401)
    }

    #[test]
    fn crystal_ball_fast() {
        let size = 900000000;

        let mut nums_large = Vec::with_capacity(size);
        let nums = vec![0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1];

        for i in 0..size {
            if i < size - 400 {
                nums_large[i] = 0;
                continue;
            }

            nums_large[i] = 1
        }
        let result = c_b_fast(&nums);
        assert_eq!(result, 9);

        let large_result = c_b_fast(&nums_large);

        assert_eq!(large_result, size - 401)
    }
}
