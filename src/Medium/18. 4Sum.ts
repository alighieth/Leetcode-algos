function fourSum(nums: number[], target: number): number[][] {
  const return_arr = new Array<Array<number>>();
  const mapped_nums = new Map<number, number>();

  nums.sort();
  nums.forEach((element) =>
    mapped_nums.set(element, (mapped_nums.get(element) ?? 0) + 1)
  );

  function decrementVal(element: number, map: Map<number, number>) {
    map.set(element, (map.get(element) ?? 0) - 1);
  }

  for (let index = 0; index < nums.length; index++) {
    const cloned_map = new Map(mapped_nums);
    const element = nums[index];
    let new_val = target - element;
    const final_Arr = new Array<number>();

    decrementVal(element, cloned_map);
    final_Arr.push(element);

    let counter = 0;
    while (counter < 3) {
      console.log(element, "-> ", new_val);

      counter++;

      let val: number = new_val;
      if (cloned_map.has(new_val) && (cloned_map.get(new_val) ?? 0) > 0) {
        decrementVal(element, cloned_map);
        new_val -= new_val;
      } else {
        const new_Arr = [...nums].filter((ele) => ele <= new_val).sort();
        if (new_Arr.length > 0) {
          val = new_Arr[0];
        }
        new_val -= val;
      }

      final_Arr.push(val);
    }
    console.log("final_Arr ", final_Arr);

    if (final_Arr.reduce((acc, curr) => acc + curr) === target) {
      return_arr.push(final_Arr);
    }
  }

  return return_arr;
}
