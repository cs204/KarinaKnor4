import {проверка_моделей,  Символ, Не, И, Или, Импликация, Эквивалентность} from './logic.mjs'


let АРыцарь = new Символ("А - рыцарь.")
let АЛжец = new Символ("А - лжец.")

let БРыцарь = new Символ("Б - рыцарь.")
let БЛжец = new Символ("Б - лжец.")

let ВРыцарь = new Символ("В - рыцарь.")
let ВЛжец = new Символ("В - лжец.")

// Задача 0
// А сказал: "Я и лжец и рыцарь."
let знания0 = new И()
знания0 = new И()
знания0.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания0.добавить(new Эквивалентность(new И(АРыцарь, АЛжец), АРыцарь))
      // Добавьте

// Задача 1
// А сказал: "Мы оба лжецы."
// Б ни чего не сказал.
let знания1 = new И()
знания1.добавить(new Эквивалентность(new И(АЛжец, БЛжец), АРыцарь))
знания1.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания1.добавить(new Эквивалентность(АЛжец, БРыцарь))
     // Добавьте

// Задача 2
// А сказал: "Мы одинаковые."
// Б сказал: "Мы разного вида."
let знания2 = new И()
знания2.добавить(new Эквивалентность(new Или(new И(АРыцарь, БРыцарь), new И(АЛжец, БЛжец)), АРыцарь))
знания2.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания2.добавить(new Эквивалентность(new Или(new И(АРыцарь, БЛжец), new И(АЛжец, БРыцарь)), БРыцарь))
знания2.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
     // Добавьте

// Задача 3
// А сказал, но мы вы не услышали.
// Б сказал: "А сказал 'Я лжец'."
// Б сказал: "В - лжец."
// В сказал: "А - рыцарь."
let знания3 = new И()
знания3.добавить(new Эквивалентность(new И(new Эквивалентность(АЛжец, АРыцарь), ВЛжец), БРыцарь))
знания3.добавить(new Эквивалентность(АРыцарь, ВРыцарь))
знания3.добавить(new Эквивалентность(АРыцарь, new Не(АЛжец)))
знания3.добавить(new Эквивалентность(БРыцарь, new Не(БЛжец)))
знания3.добавить(new Эквивалентность(ВРыцарь, new Не(ВЛжец)))
знания3.добавить(new Эквивалентность(БЛжец, new И(АРыцарь, ВРыцарь)))
     // Добавьте


let символы = [АРыцарь, АЛжец, БРыцарь, БЛжец, ВРыцарь, ВЛжец]
let задания = {
        "Задание 0": знания0,
        "Задание 1": знания1,
        "Задание 2": знания2,
        "Задание 3": знания3
    }

main()


function main()
{
	for(let задание in задания)
	{
		console.log(задание)
		if(задания[задание].операнды.length == 0)
		    console.log("    Пока не реализована.")
		else
		    for(let  символ of символы)
			if(проверка_моделей(задания[задание], символ))
			    console.log(`    ${символ.имя}`)
	}
}

