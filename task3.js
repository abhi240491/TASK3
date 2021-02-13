8. Rotate an array by k times and return the rotated array
//1. odd numbers in an array:
var arr = [4,29,20,02,33,8,0,348]
var odd = function(arr){
		return(arr.filter((item), item%2 === 0))
		}
console.log(odd(arr))
//2. convert all string to title caps in a string array
var str = ["abhi","kabhi","sabhi"]
var caps = function(str)
	return str.map((item) => item[0].toUpperCase() + item.slice(1))
	
console.log(caps(str))

//3. Sum of all numbers
var numbers = [1,3,4,6]
var sumOfAll = function(numbers){
	var sum = numbers.reduce((acc,item) => { return acc = acc+item},0)
	return sum
	}
console.log(sumOfAll(numbers))

//4. Return all prime numbers from and array
var arr = [1,3,65,227,89,19,25,81];
var prime = function(arr){
	var primeNumbers = arr.filter((item) => {
		var isPrime = true;
		for(let i=2; i<Math.sqrt(item);i++)
			if(item%i === 0){
				isPrime = false;
				break;
		}
	if(isPrime)
	return item
});
return primeNumbers;
};
console.log(prime(numbers))

//5.Return all pallindrome in an array
var arr = [322,343,1243,1221,444,23,2,545];
var pallindrome = function(arr){
	var pall = arr.filter((item) => {
		var temp = item;
		var rev = 0;
		var i = 1;
		while(temp > 0){
			dig = temp`%10;
			rev = rev*i + dig;
			temp = Math.floor(temp/10);
			i = 10;
		}
		if(item === rev)
			return item;
	});
	return pall;
};
console.log(pallindrome(arr));

//6. Return median of two sorted arrays.
var arr1 = [40,100,1,5,25,10];
var arr2 = [23,43,44,22,56,12];
var newArr = arr1.concat(arr2);
newArr = newArr.sort(function(a,b){return a-b});
mid = Math.floor(newArr.lenght/2);
median = (newArr[mid] + newArr[mid+1])/2;

//7. remove duplicates from an array
var arr = [22,34,34,22,123,53,11,44,43,11];
var uniquify = function(arr){
					var unique = arr.filter((item,ind,array) => array.indexOf(item) === ind);
				return unique;
				}
console.log(uniquify(arr));

//8. Rotate an array by k times and return the rotated array
var arr = [1,2,3,4,5,6,7,8,9]
var k = 5;
var rotate = arr.map((v,i,a) => {
	var n = a.length;
	var newarr = []
	k = k%n;
	if(i<k)
	{
		newarr.push(a[n+i-k])
	}
	else
	{
		newarr.push(a[i-k])
	}
	return newarr;
});


			
	
	
	
	


