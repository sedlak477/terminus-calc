import s1 from './assets/symbols/s1.png'
import s2 from './assets/symbols/s2.png'
import s3 from './assets/symbols/s3.png'
import s4 from './assets/symbols/s4.png'
import s5 from './assets/symbols/s5.png'
import s6 from './assets/symbols/s6.png'

export const values = [0, 10, 11, 20, 21, 22]

export function symbolFromValue(value: number): string {
	switch (value) {
		case 22:
			return s1
		case 21:
			return s2
		case 20:
			return s3
		case 11:
			return s4
		case 10:
			return s5
		case 0:
			return s6
	}
	throw new Error(`Invalid value: ${value}`)
}

export function codeFromValues(x: number, y: number, z: number): number[] {
	return [2 * x + 11, 2 * z + y - 5, Math.abs(y + z - x)]
}
