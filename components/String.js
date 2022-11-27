import React from 'react'
import styles from '../styles/Home.module.css'

const String = () => {
	return (
		<div tabIndex={0} className="collapse collapse-plus mb-12">
			<input type="checkbox" />
			<div className="collapse-title">
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
							</li>
							<li className='pb-4'>
								<h3 className='pb-2 font-bold'>Vowels in String <small className={styles.small}>(basic)</small></h3>
								<span><p>You are given a string s. You need to count the total vowels in the string. The string s contains lowercase letters only.
								</p></span>
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
							</li>
							<li className='pb-4'>
								<h3 className='pb-2 font-bold'>Reverse The String<small className={styles.small}>(easy)</small> </h3>
								<span><p>You are given a string s. You need to reverse the string.
								</p></span>
							</li>
							<li className='pb-4'>
								<h3 className='pb-2 font-bold'>	Anagram <small className={styles.small}>(easy)</small></h3>
								<span><p>Given two strings a and b consisting of lowercase characters. The task is to check whether two given strings are an anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “act” and “tac” are an anagram of each other.
								</p></span>
							</li>
							<li className='pb-4'>
								<h3 className='pb-2 font-bold'>	Valid Palindrome <small className={styles.small}>(medium)</small></h3>
								<span><p>A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
								</p></span>
							</li>
							<li className='pb-4'>
								<h3 className='pb-2 font-bold'> Valid Parenthesis <small className={styles.small}>(medium)</small>  </h3>
								<span><p>An input string is valid if:
									Open brackets must be closed by the same type of brackets.
									Open brackets must be closed in the correct order.
									Every close bracket has a corresponding open bracket of the same type.
								</p></span>
							</li>
						</ul>
					</div></div>
			</div>
		</div>



	)
}

export default String