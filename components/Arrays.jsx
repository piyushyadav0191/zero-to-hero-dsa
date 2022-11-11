import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Arrays = () => {
	return (
		<div className={styles.main}>
			<h1 className={styles.title}>
				Arr <a href="/">ay!</a>
			</h1>
			<div classname={styles.container}>
				<ul>
					<li>
						<h2>	Array insert At end</h2>
						<span><p>You are given an array arr. The size of the array is given by sizeOfArray. You need to insert an elpent at the end.
						</p></span>
					</li>
					<li>
						<h3>	Array insert at index</h3>
						<span><p>You are given an array arr(0-based index). The size of the array is given by sizeOfArray. You need to insert an elpent at given index and print the modified array.
						</p></span>
					</li>
					<li>
						<h3>	Get Elpent At Index </h3>
						<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to get the elpent at index i and return it. If no elpent exists at i then return -1.
						</p></span>
					</li>
					<li>
						<h3>Array Update At Index </h3>
						<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to update an elpent at the given index. The arr[i] of the array is initially set to i+1.
						</p></span>
					</li>
					<li>
						<h3>Array Delete And Shift </h3>
						<span><p>You are given an array arr(0-based indexing). The size of the array is given by n. You need to delete an elpent at given index and print the modified array. The arr[i] of array is initially set to i+1.
							Deletion means you need to shift all the elpents after that index to the left by 1 position and set the last elpent as zero.
						</p></span>
					</li>
					<li>
						<h3>Who has the majority? </h3>
						<span><p>Given an array arr[] of size N and two elpents x and y, use counter variables to find which elpent appears most in the array, x or y. If both elpents have the same frequency, then return the smaller elpent.
							Note:  We need to return the elpent, not its count.
						</p></span>
					</li>
					<li>
						<h3>Maximum and Minimum In Array </h3>
						<span><p>Given an array arr of size n, find maximum and minimum elpents in the array.
						</p></span>
					</li>
					<li>
						<h3>Reverse The Array </h3>
						<span><p>Given an array arr of size n. You need to reverse the array.
						</p></span>
					</li>
					<li>
						<h3>	Rotate an Array</h3>
						<span><p>Given an unsorted array arr[] of size N, rotate it by D elpents in the counter-clockwise direction.
						</p></span>
					</li>
					<li>
						<h3>	Sum of Array Elpents </h3>
						<span><p>Given an integer array arr of size n, you need to sum the elpents of arr.
						</p></span>
					</li>
					<li>
						<h3> Is Array Sorted  </h3>
						<span><p>Given an array a[ ] of size N. The task is to check if array is sorted or not. A sorted array can either be increasingly sorted or decreasingly sorted. Also consider duplicate elpents to be sorted.
						</p></span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Arrays