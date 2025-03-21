const findTriplets = (arr) => {
    let n = arr.length;
    let found = false;

    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(`Triplet: (${arr[i]}, ${arr[j]}, ${arr[k]})`);
                    found = true;
                }
            }
        }
    }
    if (!found) {
        console.log("No triplet found");

    }
};

const nums = process.argv.slice(2).map(Number);

if (nums.length < 3) {
    console.log("Please provide at least 3 numbers.");
} else {
    findTriplets(nums);
}
