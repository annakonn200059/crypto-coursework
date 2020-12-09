import org.khronos.webgl.ArrayBuffer
import org.w3c.dom.*
import kotlin.browser.document
import kotlin.IntArray as IntArray1

fun transformKey(key: String, alphabet: String): IntArray1{
    return key.map { alphabet.indexOf(it) }.toIntArray()
}

fun transform(text: String, alphabet: String,oldalphabet: String,key:Int): String {
var s =""
    val l = text.length-1
  for (i in 0..l){
      if (text[i].toUpperCase() in alphabet || text[i].toUpperCase() in oldalphabet)
      { val k = oldalphabet.indexOf(text[i].toUpperCase())
      s+=alphabet[(k+key)%alphabet.length]}
      else s+=text[i].toString()
  }
    return s
}

fun duplicate(key: String): String {
    var s = key
    println("Before: $s")
    var withoutReps = ""
    val set = HashSet<Char>()
    for(char in key) {
        if(set.add(char))
            withoutReps += char.toUpperCase()
    }
    s = withoutReps
    return s
}

fun removeChar(value: String, char: Char): String {
    var result = ""
    for ( c in value ) {
        if ( c != char )
            result += c
    }
    return result
}

fun deletelettersfromalphabet(alp:String, key1: IntArray1, key2:String):String{
    var k=alp
     for (i in 0..key1.size){
         val h = alp[key1[i]]
         k = removeChar(k,h)
     }
    return if (key2.contains(alp[0]))
        k
    else
        alp[0]+k
}

fun wordwithoutkey(text:String, oldalph: String,alph:String, key:Int):String{//функция для расшифровки
    var s =""
    val l = text.length-1
    for (i in 0..l) {
        if (text[i].toUpperCase() in alph || text[i].toUpperCase() in oldalph) {
            val k = oldalph.indexOf(text[i].toUpperCase())
            val a = if (k - key >= 0) oldalph[(k - key) % oldalph.length]
            else oldalph[oldalph.length - (key - k)]
            val o = oldalph.indexOf(a.toUpperCase())
            s += alph[o].toUpperCase()
        } else s += text[i].toString()
    }
    return s
}

fun swapElements(obj1:Element?, obj2:Element?) {
    // create marker element and insert it where obj1 is
    val temp = document.createElement("div")
    if (obj1 != null) {
        obj1.parentNode?.insertBefore(temp, obj1)
    }
    // move obj1 to right before obj2
    if (obj1 != null) {
        if (obj2 != null) {
            obj2.parentNode?.insertBefore(obj1, obj2)
        }
    }
    // move obj2 to right before where obj1 used to be
    if (obj2 != null) {
        temp.parentNode?.insertBefore(obj2, temp)

    }
    // remove temporary marker node
    temp.parentNode?.removeChild(temp)
}
fun doSwap() {
    swapElements(document.getElementById("open-text"), document.getElementById("cipher-text"))
    swapElements(document.getElementById("header1"), document.getElementById("header2"))
    swapElements(document.getElementById("encrypt-btn"),document.getElementById("decrypt-btn"))
    val k1 = document.getElementById("open-text") as HTMLTextAreaElement
    val k2 = document.getElementById("cipher-text") as HTMLTextAreaElement
    k1.value = ""
    k2.value =""
}

fun main() {
    val keyElement = document.getElementById("keyword") as HTMLInputElement
    val numberkeyElement = document.getElementById("key") as HTMLInputElement
    var openTextElement = document.getElementById("open-text") as HTMLTextAreaElement
    var cipherTextElement = document.getElementById("cipher-text") as HTMLTextAreaElement
    val alphabetRUS = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
    val alphabetENG = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var alphRussmall = ""
    for (char in alphabetRUS) {
        alphRussmall += char.toLowerCase()
    }

    var alphEngsmall = ""
    for (char in alphabetENG) {
        alphEngsmall += char.toLowerCase()
    }
    (document.getElementById("encrypt-btn") as HTMLButtonElement).onclick = {
        val pushedel = document.getElementById("lang") as HTMLSelectElement
        val sellang = pushedel.value
        val alphabet = if (sellang == "eng") {
            alphabetENG
        } else alphabetRUS

        var alphsmall = ""
        for (char in alphabet) {
           alphsmall += char.toLowerCase()
        }

        val word = openTextElement.value
        var k_symbols = 0
        for (char in word) {
            if (!alphabetRUS.contains(char) && !alphabetENG.contains(char) && !alphRussmall.contains(char)
                                            && !alphEngsmall.contains(char))
                k_symbols += 1
        }

        var k_letters = 0
        for (char in word) {
            if (char in alphabet || char in alphsmall) k_letters += 1
        }
        if ((k_letters + k_symbols) != word.length) {cipherTextElement.value = "Введите данные на выбранном языке"}
        else {
            val numberkey = numberkeyElement.value
            val keyword = keyElement.value
            val newkey = duplicate(keyword)
            val newalp = newkey + deletelettersfromalphabet(alphabet, transformKey(newkey, alphabet), newkey)
            cipherTextElement.value = transform(openTextElement.value, newalp, alphabet, numberkey.toInt())
            false
        }
    }

    (document.getElementById("decrypt-btn") as HTMLButtonElement).onclick = {
        val pushedel = document.getElementById("lang") as HTMLSelectElement
        val sellang = pushedel.value
        val alphabet = if (sellang == "eng") {
            alphabetENG
        } else alphabetRUS

        var alphsmall = ""
        for (char in alphabet) {
            alphsmall += char.toLowerCase()
        }

        val word = cipherTextElement.value
        var k_symbols = 0
        for (char in word) {
            if (!alphabetRUS.contains(char) && !alphabetENG.contains(char) && !alphRussmall.contains(char) && !alphEngsmall.contains(char))
                k_symbols += 1
        }

        var k_letters = 0
        for (char in word) {
            if (char in alphabet || char in alphsmall) k_letters += 1
        }
        if ((k_letters + k_symbols) != word.length) {openTextElement.value = "Введите данные на выбранном языке"}
        else {
        val numberkey = numberkeyElement.value
        val keyword = keyElement.value
        val newkey = duplicate(keyword)
        val newalp = newkey + deletelettersfromalphabet(alphabet, transformKey(newkey, alphabet), newkey)
        openTextElement.value = wordwithoutkey(cipherTextElement.value, newalp, alphabet, numberkey.toInt())
        false
    }}

    (document.getElementById("swap-wrap") as HTMLButtonElement).onclick = {
        doSwap()
    }

};

