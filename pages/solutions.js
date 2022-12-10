import Head from 'next/head'
import Frame from 'react-frame-component';
import styles from "../styles/Home.module.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const solutions = () => {
	const notify = () => {
		toast.info("Submit Questions on Leetcode after isArraySorted Question")
	}
	return (
		<>
			<Head>
				<title>Solutions</title>
			</Head>
			<div tabIndex={0} className="collapse collapse-plus" onClick={notify}>
				<input type="checkbox" />
				<div className="collapse-title">
					<h1 className={styles.title}>
						1.	Arr<span className='text-blue-600  '>ay</span>
					</h1>

				</div>
				<div className="collapse-content">
					<div className={styles.main}>
						<div className={styles.container}>
							<ul className='list-disc'>
								<li className='pb-4'>
									<h2 className='pb-2 font-bold'>	Array insert At end  <small className={styles.small}>(basic)</small></h2>
									<span><p>You are given an array arr. The size of the array is given by sizeOfArray. You need to insert an element at the end.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/01127756342c757bc6849178174fcc29.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Array insert at index<small className={styles.small}>(basic)</small></h3>
									<span><p>You are given an array arr(0-based index). The size of the array is given by sizeOfArray. You need to insert an element at given index and print the modified array.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/41f64cd7dd3a20d9fb98c05ce8ed44c2.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Get element At Index <small className={styles.small}>(basic)</small></h3>
									<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to get the element at index i and return it. If no element exists at i then return -1.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/2d1fdfb6dc1334e981406921ae399071.js'></script></body></html>" />

								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Array Update At Index <small className={styles.small}>(easy)</small> </h3>
									<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to update an element at the given index. The arr[i] of the array is initially set to i+1.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/677fd08523481a82cb1f43958cf628a7.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Array Delete And Shift  <small className={styles.small}>(basic)</small></h3>
									<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to delete an element at given index and print the modified array. The arr[i] of array is initially set to i+1.
										Deletion means you need to shift all the elements after that index to the left by 1 position and set the last element as zero.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/8a67e353438f37a2de9cb0d2e049d17e.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Who has the majority?<small className={styles.small}>(easy)</small> </h3>
									<span><p>Given an array arr[] of size N and two elements x and y, use counter variables to find which element appears most in the array, x or y. If both elements have the same frequency, then return the smaller element.
										Note:  We need to return the element, not its count.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/c86051dd01527f6a794305140b63f28b.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Maximum and Minimum In Array <small className={styles.small}>(easy)</small></h3>
									<span><p>Given an array arr of size n, find maximum and minimum elements in the array.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/bef444c1b1a7ad7c394cddf4f842084d.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Reverse The Array<small className={styles.small}>(easy)</small> </h3>
									<span><p>Given an array arr of size n. You need to reverse the array.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/598014fcf774d211cdd79805609060a1.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Rotate an Array <small className={styles.small}>(easy)</small></h3>
									<span><p>Given an unsorted array arr[] of size N, rotate it by D elements in the counter-clockwise direction.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/793991dd6733aec07ad07faa633af1e9.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Sum of Array elements <small className={styles.small}>(easy)</small></h3>
									<span><p>Given an integer array arr of size n, you need to sum the elements of arr.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/d2424d4f6ea257584be30177da235e2d.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'> Is Array Sorted <small className={styles.small}>(easy)</small>  </h3>
									<span><p>Given an array a[ ] of size N. The task is to check if array is sorted or not. A sorted array can either be increasingly sorted or decreasingly sorted. Also consider duplicate elements to be sorted.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/df1a9bb4684da24bbb017979cd7131ad.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Two Sum <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/4b64aba38be9f31b949eeb027c25ea83.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Maximum Subarray <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an integer array nums, find the subarray which has the largest sum and return its sum.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/cbac4a710f7ce9f9ab9fbcb3cc5fdc1b.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Move Zeroes <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an integer array nums,  move all zeros to the end of it while maintaining the relative order of the non-zero elements.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/8364b45584944184afe299a71461314c.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Contains Duplicate <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/f698c57bdc7922a1fb1606185d47a6f5.js'></script></body></html>" />

								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Longest Word <small className={styles.small}>(hard)</small>  </h3>
									<span><p>Have the function LongestWord ( sen) take the sen parameter being passed and return the longest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. Words may also contain numbers
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/c99fbc05209e07c9b3896ae32c52fefe.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Trapping Rain Water <small className={styles.small}>(hard)</small>  </h3>
									<span><p>Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/7ae126dd5fe611afc36de5e36a4f134e.js'></script></body></html>" />

								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Three Sum <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/17dd41a7c3a4f0aa078d532299fd9caa.js'></script></body></html>" />

								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Product of Array Except Self <small className={styles.small}>(medium)</small>  </h3>
									<span><p>Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/49089413b034e95b07d5974b7f49ca60.js'></script></body></html>" />
								</li>
							</ul>
						</div></div>
				</div>
			</div>

			<div tabIndex={0} className="collapse collapse-plus">
				<input type="checkbox" />
				<div className="collapse-title" >
					<h1 className={styles.title}>
						2.	Str<span className='text-blue-600  '>ing</span>
					</h1>

				</div>
				<div className="collapse-content">
					<div className={styles.main}>
						<div className={styles.container}>
							<ul className='list-disc'>
								<li className='pb-4 '>
									<h2 className='pb-2 font-bold'>	Length of String <small className={styles.small}>(basic)</small></h2>
									<span><p>You are given a string s. You need to find the length of the string.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/1e3010dab1635380c98dadb773570ac2.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Vowels in String <small className={styles.small}>(basic)</small></h3>
									<span><p>You are given a string s. You need to count the total vowels in the string. The string s contains lowercase letters only.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/5be5033e823f5a93c7f7be8437aa60b5.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Count Distinct Vowels in String <small className={styles.small}>(basic)</small></h3>
									<span><p>You are given a string s. You need to count the total distinct vowels in the string. The string s contains lowercase letters only.
									</p></span>
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Count words in String<small className={styles.small}>(easy)</small> </h3>
									<span><p>You are given a string s consisting of multiple words. You need to count the total words in the string. Words are separated by a single space.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/93310f664e0b89d6273278c0091e7d30.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>lowercase to uppercase  <small className={styles.small}>(basic)</small></h3>
									<span><p>You are given a string s. You need to convert the case of lowercase letter to uppercase letters.
									</p></span>
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>uppercase to lowercase<small className={styles.small}>(easy)</small> </h3>
									<span><p>You are given a string s. You need to convert the case of uppercase letter to lowercase letters.
									</p></span>
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>String Validation <small className={styles.small}>(easy)</small></h3>
									<span><p>Given a string s representing a password, you need to check if the string is valid or not. A valid string has the following properties:
										String must have the length greater than or equal to 10.
										String must contain at least 1 numeric character.
										String must contain at least 1 uppercase character.
										String must contain at least 1 lowercase character.
										String must contain at least 1 special character
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/8b25b7de1430b6866a1bb73da6e8b5b9.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Reverse The String<small className={styles.small}>(easy)</small> </h3>
									<span><p>You are given a string s. You need to reverse the string.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/f2e5c72e098b5ccf4af1f09604782dad.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Anagram <small className={styles.small}>(easy)</small></h3>
									<span><p>Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “act” and “tac” are an anagram of each other.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/5f7c744587b8530ed86c0aa5c76940ac.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>	Valid Palindrome <small className={styles.small}>(medium)</small></h3>
									<span><p>A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/9c313fab2dbe7943902a30a056771dbb.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'> Valid Parenthesis <small className={styles.small}>(medium)</small>  </h3>
									<span><p>An input string is valid if:
										Open brackets must be closed by the same type of brackets.
										Open brackets must be closed in the correct order.
										Every close bracket has a corresponding open bracket of the same type.
									</p></span>
									<Frame className={styles.frame} initialContent="<!DOCTYPE html><html><head></head><body><script src='https://gist.github.com/piyushyadav0191/6cf4ac3a2de01918a0ed63aa568a30ed.js'></script></body></html>" />
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'> Longest Valid Parentheses <small className={styles.small}>(hard)</small>  </h3>
									<span><p>Given a string containing just the characters '(' and ')', return the length of the longest valid (well-formed) parentheses substring
									</p></span>
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Longest Duplicate Substring<small className={styles.small}>(hard)</small>  </h3>
									<span><p>Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times. The occurrences may overlap.
										Return any duplicated substring that has the longest possible length. If s does not have a duplicated substring, the answer is "".
									</p></span>
								</li>
								<li className='pb-4'>
									<h3 className='pb-2 font-bold'>Basic Calculator<small className={styles.small}>(hard)</small>  </h3>
									<span><p>Given a string s representing a valid expression, implement a basic calculator to evaluate it, and return the result of the evaluation.
									</p></span>
								</li>
							</ul>
						</div></div>
				</div>
			</div>

		</>
	)
}

export default solutions

