const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
 	let final = []
	let j = 0;
	let sum = 0;
	let temp = []
	while(j<arr.length){
		if(sum+arr[j]<=n) {
		    temp.push(arr[j])
		    sum += arr[j];
		} else {
		    if(temp.length) final.push(temp)
		    temp = [arr[j]]
		    sum = arr[j]
		} 
		j++;
	}
	if(temp.length) final.push(temp)
	return final
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
