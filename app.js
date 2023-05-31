
const storage =[357,375,537,573,735,753,123,132,213,231,312,321,456,465,546,564,645,654,789,798,879,897,978,
987,147,174,417,471,714,741,258,285,528,582,825,852,369,396,639,693,936,963,159,195,519,591,915,951];
const key=[];
const valx=[];
const valo=[];

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
  location.reload();
}

refreshButton.addEventListener('click', refreshPage)


// JavaScript code for the above approach

	// Function to find all the unique
	// 3 digit number that can be formed
	// from the given digits
	function find3DigitNumbers(
		digits) {
		// Generating frequency map
		// of the given digits
		let count = new Array(10).fill(0);
		for (let d of digits)
			count[d]++;

		let res = [];

		for (let num = 100; num < 999; num++) {

			// Generating frequency map
			// of the current number
			let currCount = new Array(10).fill(0);
			let temp = num;

			while (temp) {
				currCount[temp % 10]++;
				temp = Math.floor(temp / 10);
			}

			// Checking if the number
			// can be generated or not
			let flag = true;

			for (let i = 0; i < 10; i++) {
				if (currCount[i] > count[i]) {
					flag = false;
					break;
				}
			}

			if (flag) {
				res.push(num);
			}
		}
		return res;
	}



function clicked(ele){

	

    if((key.length)%2===0){
		ele.innerHTML=" <img src=i2.png alt=a >"
        key.push(ele.value);
        valx.push(ele.value);
		let ans =find3DigitNumbers(valx);
		let output = storage.filter(function (obj) {
			return ans.indexOf(obj) !== -1;
		  });
		  if(output.length>0){
			document.getElementById("title").innerHTML="winner player x"
			refreshButton.classList.remove("adc");
		  }
		  else if(key.length===9){
			document.getElementById("title").innerHTML="no winner"
			refreshButton.classList.remove("adc");
		  }
		
		
    
}else{
	ele.innerHTML=" <img src=i1.png alt=a >"


    key.push(ele.value);
    valo.push(ele.value);

	let ans =find3DigitNumbers(valo);
		let out = storage.filter(function (obj) {
			return ans.indexOf(obj) !== -1;
		  });
		  if(out.length>0){
			document.getElementById("title").innerHTML="winner player o"
			refreshButton.classList.remove("adc");
		  }
		
	
  
}
}



	

	// Function Call
//	let ans =find3DigitNumbers([1,4,9]);
//    
//    ans.forEach((newvalues)=>{
//        valo.push(newvalues);
//    })
//	
// console.log(valo);
//
// const output = storage.filter(function (obj) {
//	return ans.indexOf(obj) !== -1;
//  });
//  console.log(output.length);
 

