//Test Suite
describe('Week Two Skills Check', function () {
	describe('Problem 1 - myName', function () {
		it('myName variable should exist', function () {
			expect(myName).toBeDefined()
		})
		it('should be the correct data type', function () {
			expect(typeof myName).toBe('string')
		})
	})
	describe('Problem 2 - faveNum', function () {
		it('faveNum variable should exist', function () {
			expect(faveNum).toBeDefined()
		})
		it('should be the correct data type', function () {
			expect(typeof faveNum).toBe('number')
		})
	})
	describe('Problem 3 - lovesCode', function () {
		it('lovesCode variable should exist', function () {
			expect(lovesCode).toBeDefined()
		})
		it('should be the correct data type', function () {
			expect(typeof lovesCode).toBe('boolean')
		})
	})
	describe('Problem 4 - sum', function () {
		it('sum function should exist', function () {
			expect(sum).toBeDefined()
		})
		it('sum function should return the correct value', function () {
			expect(sum(3, 3)).toEqual(6)
		})
	})
	describe('Problem 5 - lovesCodeChecker', function () {
		it('lovesCodeChecker variable should exist', function () {
			expect(lovesCodeChecker).toBeDefined()
		})
		it('should be the correct data type', function () {
			expect(lovesCodeChecker(true)).toEqual(true)
		})
		it('should be the correct data type', function () {
			expect(lovesCodeChecker(false)).toEqual(false)
		})
	})
	describe('Problem 6 - oddChecker', function () {
		it('oddChecker should exist', function () {
			expect(oddChecker).toBeDefined()
		})
		it('should return "the number is odd" if the number is odd', function () {
			expect(oddChecker(7)).toBe('the number is odd')
		})
		it('should return "the number is true" if the number is even', function () {
			expect(oddChecker(4)).toBe('the number is even')
		})
	})

	describe('Problem 7 - iLove', function () {
		it('iLove should exist', function () {
			expect(iLove).toBeDefined()
		})
		it('should return "Bryan loves skateboarding" if passed "Bryan" and "skateboarding"', function () {
			expect(iLove('Bryan', 'skateboarding')).toBe('Bryan loves skateboarding')
		})
	})

	describe('Problem 8 - colorCopy', function () {
		it('colorCopy should exist', function () {
			expect(colorCopy).toBeDefined()
		})
		it('should contain the correct colors', function () {
			expect(faveColors[0] === colorCopy[0]).toEqual(true)
		})
	})

	describe('Problem 9 - colorCopy add color', function () {
		it('colorCopy should have a fourth color added to it', function () {
			expect(colorCopy.length).toBe(4)
		})
	})

	describe('Problem 10 - middleNums', function () {
		it('middleNums should exist', function () {
			expect(middleNums).toBeDefined()
		})
		it('middleNums should contain the correct numbers', function () {
			expect(middleNums).toEqual([2, 3, 4])
		})
	})

	describe('Problem 11 - me', function () {
		it('me should exist', function () {
			expect(me).toBeDefined()
			expect(typeof me).toBe('object')
		})
		it('me should have the correct key:value pairs', function () {
			expect(typeof me.firstName).toEqual('string')
			expect(typeof me.state).toEqual('string')
			expect(typeof me.age).toEqual('number')
			expect(typeof me.greeter).toEqual('function')
		})
	})

	describe('Problem 12 - bigOrSmall', function () {
		it('bigOrSmall should exist', function () {
			expect(bigOrSmall).toBeDefined()
		})
		it('bigOrSmall should return the correct array', function () {
			expect(bigOrSmall([100, 3, 200, 5, 101])).toEqual([
				'small',
				'small',
				'big',
				'small',
				'big'
			])
		})
	})

	describe('Problem 13 - arrayReverser', function () {
		it('arrayReverser should exist', function () {
			expect(arrayReverser).toBeDefined()
		})
		it('arrayReverser should return the correct array', function () {
			expect(arrayReverser([1, 2, 3])).toEqual([3, 2, 1])
		})
	})

	describe('Problem 14 - doubled', function () {
		it('doubled should exist', function () {
			expect(doubled).toBeDefined()
		})
		it('doubled should return the correct array', function () {
			expect(doubled).toEqual([6, 110, 1576, 4, 2])
		})
	})

	describe('Problem 15 - filtered', function () {
		it('should exist', function () {
			expect(filtered).toBeDefined()
		})
		it('filtered should return the correct array', function () {
			expect(filtered).toEqual([788])
		})
	})

	describe('Problem 16 - total', function () {
		it('should exist', function () {
			expect(total).toBeDefined()
		})
		it('reduce should return the correct total', function () {
			expect(total).toEqual(849)
		})
	})

	describe('Problem 17 - myNumbersIndex', function () {
		it('should exist', function () {
			expect(myNumbersIndex).toBeDefined()
		})
		it('myNumbersIndex should return the correct array', function () {
			expect(myNumbersIndex).toEqual([0, 1, 2, 3, 4])
		})
	})

	describe('Problem 18 - forTheLoveOfGeorge', function () {
		it('should exist', function () {
			expect(forTheLoveOfGeorge).toBeDefined()
		})
		it('forTheLoveOfGeorge should return the correct array', function () {
			expect(forTheLoveOfGeorge).toEqual(['George', 'George', 'George', 'George', 'George', 'George'])
		})
	})

	describe('Problem 19 - enemies', function () {
		it('should exist', function () {
			expect(enemies).toBeDefined()
		})
		it('enemies should return the correct array', function () {
			expect(enemies).toEqual([{ name: 'Bart', friend: false, awesomeLevel: 3 }, { name: 'Stephanie', friend: false, awesomeLevel: 6 }])
		})
	})

	describe('Problem 20 - totallyAwesome', function () {
		it('should exist', function () {
			expect(totallyAwesome).toBeDefined()
		})
		it('totallyAwesome should return the correct array', function () {
			expect(totallyAwesome).toEqual(42)
		})
	})
})
