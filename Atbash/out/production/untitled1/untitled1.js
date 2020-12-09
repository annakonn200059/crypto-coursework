if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'untitled1'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'untitled1'.");
}
var untitled1 = function (_, Kotlin) {
  'use strict';
  var unboxChar = Kotlin.unboxChar;
  var indexOf = Kotlin.kotlin.text.indexOf_8eortd$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toChar = Kotlin.toChar;
  var reversed = Kotlin.kotlin.text.reversed_gw00vp$;
  function transformKey(key, alphabet) {
    var destination = ArrayList_init(key.length);
    var tmp$;
    tmp$ = iterator(key);
    while (tmp$.hasNext()) {
      var item = unboxChar(tmp$.next());
      destination.add_11rb$(indexOf(alphabet, unboxChar(toBoxedChar(item))));
    }
    return toIntArray(destination);
  }
  function transform(text, alphabet, oldalphabet) {
    var s = '';
    var l = text.length - 1 | 0;
    for (var i = 0; i <= l; i++) {
      var $receiver = text.charCodeAt(i);
      var tmp$ = contains(alphabet, toChar(String.fromCharCode($receiver | 0).toUpperCase().charCodeAt(0)));
      if (!tmp$) {
        var $receiver_0 = text.charCodeAt(i);
        tmp$ = contains(oldalphabet, toChar(String.fromCharCode($receiver_0 | 0).toUpperCase().charCodeAt(0)));
      }
      if (tmp$) {
        var $receiver_1 = text.charCodeAt(i);
        var k = indexOf(oldalphabet, toChar(String.fromCharCode($receiver_1 | 0).toUpperCase().charCodeAt(0)));
        s += String.fromCharCode(alphabet.charCodeAt(k));
      }
       else
        s += String.fromCharCode(text.charCodeAt(i));
    }
    return s;
  }
  function duplicate(key) {
    var tmp$;
    var s = key;
    println('Before: ' + s);
    var withoutReps = '';
    var set = HashSet_init();
    tmp$ = iterator(key);
    while (tmp$.hasNext()) {
      var char = unboxChar(tmp$.next());
      if (set.add_11rb$(toBoxedChar(char))) {
        withoutReps += String.fromCharCode(toChar(String.fromCharCode(char | 0).toUpperCase().charCodeAt(0)));
      }
    }
    s = withoutReps;
    return s;
  }
  function removeChar(value, char) {
    var tmp$;
    var result = '';
    tmp$ = iterator(value);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if (c !== char)
        result += String.fromCharCode(c);
    }
    return result;
  }
  function deletelettersfromalphabet(alp, key1, key2) {
    var k = alp;
    for (var i = 0; i <= key1.length; i++) {
      var h = alp.charCodeAt(key1[i]);
      k = removeChar(k, h);
    }
    var tmp$;
    if (contains(key2, alp.charCodeAt(0)))
      tmp$ = k;
    else {
      var $receiver = alp.charCodeAt(0);
      var other = k;
      tmp$ = String.fromCharCode($receiver) + other;
    }
    return tmp$;
  }
  function wordwithoutkey(text, oldalph, alph) {
    var s = '';
    var l = text.length - 1 | 0;
    for (var i = 0; i <= l; i++) {
      var $receiver = text.charCodeAt(i);
      var tmp$ = contains(alph, toChar(String.fromCharCode($receiver | 0).toUpperCase().charCodeAt(0)));
      if (!tmp$) {
        var $receiver_0 = text.charCodeAt(i);
        tmp$ = contains(oldalph, toChar(String.fromCharCode($receiver_0 | 0).toUpperCase().charCodeAt(0)));
      }
      if (tmp$) {
        var $receiver_1 = text.charCodeAt(i);
        var k = indexOf(oldalph, toChar(String.fromCharCode($receiver_1 | 0).toUpperCase().charCodeAt(0)));
        var $receiver_2 = oldalph.charCodeAt(k);
        var o = indexOf(oldalph, toChar(String.fromCharCode($receiver_2 | 0).toUpperCase().charCodeAt(0)));
        var tmp$_0 = String;
        var tmp$_1 = tmp$_0.fromCharCode;
        var $receiver_3 = alph.charCodeAt(o);
        s += tmp$_1.call(tmp$_0, toChar(String.fromCharCode($receiver_3 | 0).toUpperCase().charCodeAt(0)));
      }
       else
        s += String.fromCharCode(text.charCodeAt(i));
    }
    return s;
  }
  function swapElements(obj1, obj2) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var temp = document.createElement('div');
    if (obj1 != null) {
      (tmp$ = obj1.parentNode) != null ? tmp$.insertBefore(temp, obj1) : null;
    }
    if (obj1 != null) {
      if (obj2 != null) {
        (tmp$_0 = obj2.parentNode) != null ? tmp$_0.insertBefore(obj1, obj2) : null;
      }
    }
    if (obj2 != null) {
      (tmp$_1 = temp.parentNode) != null ? tmp$_1.insertBefore(obj2, temp) : null;
    }
    (tmp$_2 = temp.parentNode) != null ? tmp$_2.removeChild(temp) : null;
  }
  function doSwap() {
    var tmp$, tmp$_0;
    swapElements(document.getElementById('open-text'), document.getElementById('cipher-text'));
    swapElements(document.getElementById('header1'), document.getElementById('header2'));
    swapElements(document.getElementById('encrypt-btn'), document.getElementById('decrypt-btn'));
    var k1 = Kotlin.isType(tmp$ = document.getElementById('open-text'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    var k2 = Kotlin.isType(tmp$_0 = document.getElementById('cipher-text'), HTMLTextAreaElement) ? tmp$_0 : throwCCE();
    k1.value = '';
    k2.value = '';
  }
  function main$lambda(closure$alphabetENG, closure$alphabetRUS, closure$openTextElement, closure$alphRussmall, closure$alphEngsmall, closure$cipherTextElement, closure$keyElement) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var pushedel = Kotlin.isType(tmp$ = document.getElementById('lang'), HTMLSelectElement) ? tmp$ : throwCCE();
      var sellang = pushedel.value;
      if (equals(sellang, 'eng')) {
        tmp$_0 = closure$alphabetENG;
      }
       else
        tmp$_0 = closure$alphabetRUS;
      var alphabet = tmp$_0;
      var alphsmall = '';
      tmp$_1 = iterator(alphabet);
      while (tmp$_1.hasNext()) {
        var char = unboxChar(tmp$_1.next());
        alphsmall += String.fromCharCode(toChar(String.fromCharCode(char | 0).toLowerCase().charCodeAt(0)));
      }
      var word = closure$openTextElement.value;
      var k_symbols = 0;
      tmp$_2 = iterator(word);
      while (tmp$_2.hasNext()) {
        var char_0 = unboxChar(tmp$_2.next());
        if (!contains(closure$alphabetRUS, char_0) && !contains(closure$alphabetENG, char_0) && !contains(closure$alphRussmall.v, char_0) && !contains(closure$alphEngsmall.v, char_0))
          k_symbols = k_symbols + 1 | 0;
      }
      var k_letters = 0;
      tmp$_3 = iterator(word);
      while (tmp$_3.hasNext()) {
        var char_1 = unboxChar(tmp$_3.next());
        if (contains(alphabet, char_1) || contains(alphsmall, char_1))
          k_letters = k_letters + 1 | 0;
      }
      if ((k_letters + k_symbols | 0) !== word.length) {
        return closure$cipherTextElement.value = '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435', Unit;
      }
       else {
        var keyword = closure$keyElement.value;
        var newkey = duplicate(keyword);
        var newalp = newkey + deletelettersfromalphabet(alphabet, transformKey(newkey, alphabet), newkey);
        var tmp$_4;
        var verynewalph = reversed(Kotlin.isCharSequence(tmp$_4 = newalp) ? tmp$_4 : throwCCE()).toString();
        closure$cipherTextElement.value = transform(closure$openTextElement.value, verynewalph, alphabet);
        return false;
      }
    };
  }
  function main$lambda_0(closure$alphabetENG, closure$alphabetRUS, closure$cipherTextElement, closure$alphRussmall, closure$alphEngsmall, closure$keyElement, closure$openTextElement) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      var pushedel = Kotlin.isType(tmp$ = document.getElementById('lang'), HTMLSelectElement) ? tmp$ : throwCCE();
      var sellang = pushedel.value;
      if (equals(sellang, 'eng')) {
        tmp$_0 = closure$alphabetENG;
      }
       else
        tmp$_0 = closure$alphabetRUS;
      var alphabet = tmp$_0;
      var alphsmall = '';
      tmp$_1 = iterator(alphabet);
      while (tmp$_1.hasNext()) {
        var char = unboxChar(tmp$_1.next());
        alphsmall += String.fromCharCode(toChar(String.fromCharCode(char | 0).toLowerCase().charCodeAt(0)));
      }
      var word = closure$cipherTextElement.value;
      var k_symbols = 0;
      tmp$_2 = iterator(word);
      while (tmp$_2.hasNext()) {
        var char_0 = unboxChar(tmp$_2.next());
        if (!contains(closure$alphabetRUS, char_0) && !contains(closure$alphabetENG, char_0) && !contains(closure$alphRussmall.v, char_0) && !contains(closure$alphEngsmall.v, char_0))
          k_symbols = k_symbols + 1 | 0;
      }
      var k_letters = 0;
      tmp$_3 = iterator(word);
      while (tmp$_3.hasNext()) {
        var char_1 = unboxChar(tmp$_3.next());
        if (contains(alphabet, char_1) || contains(alphsmall, char_1))
          k_letters = k_letters + 1 | 0;
      }
      if ((k_letters + k_symbols | 0) !== word.length) {
        return closure$cipherTextElement.value = '\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043D\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u043C \u044F\u0437\u044B\u043A\u0435', Unit;
      }
       else {
        var keyword = closure$keyElement.value;
        var newkey = duplicate(keyword);
        var newalp = newkey + deletelettersfromalphabet(alphabet, transformKey(newkey, alphabet), newkey);
        var tmp$_4;
        var verynewalph = reversed(Kotlin.isCharSequence(tmp$_4 = newalp) ? tmp$_4 : throwCCE()).toString();
        closure$openTextElement.value = wordwithoutkey(closure$cipherTextElement.value, verynewalph, alphabet);
        return false;
      }
    };
  }
  function main$lambda_1(it) {
    doSwap();
    return Unit;
  }
  function main() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var keyElement = Kotlin.isType(tmp$ = document.getElementById('keyword'), HTMLInputElement) ? tmp$ : throwCCE();
    var openTextElement = Kotlin.isType(tmp$_0 = document.getElementById('open-text'), HTMLTextAreaElement) ? tmp$_0 : throwCCE();
    var cipherTextElement = Kotlin.isType(tmp$_1 = document.getElementById('cipher-text'), HTMLTextAreaElement) ? tmp$_1 : throwCCE();
    var alphabetRUS = '\u0410\u0411\u0412\u0413\u0414\u0415\u0401\u0416\u0417\u0418\u0419\u041A\u041B\u041C\u041D\u041E\u041F\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042A\u042B\u042C\u042D\u042E\u042F';
    var alphabetENG = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var alphRussmall = {v: ''};
    tmp$_2 = iterator(alphabetRUS);
    while (tmp$_2.hasNext()) {
      var char = unboxChar(tmp$_2.next());
      alphRussmall.v += String.fromCharCode(toChar(String.fromCharCode(char | 0).toLowerCase().charCodeAt(0)));
    }
    var alphEngsmall = {v: ''};
    tmp$_3 = iterator(alphabetENG);
    while (tmp$_3.hasNext()) {
      var char_0 = unboxChar(tmp$_3.next());
      alphEngsmall.v += String.fromCharCode(toChar(String.fromCharCode(char_0 | 0).toLowerCase().charCodeAt(0)));
    }
    (Kotlin.isType(tmp$_4 = document.getElementById('encrypt-btn'), HTMLButtonElement) ? tmp$_4 : throwCCE()).onclick = main$lambda(alphabetENG, alphabetRUS, openTextElement, alphRussmall, alphEngsmall, cipherTextElement, keyElement);
    (Kotlin.isType(tmp$_5 = document.getElementById('decrypt-btn'), HTMLButtonElement) ? tmp$_5 : throwCCE()).onclick = main$lambda_0(alphabetENG, alphabetRUS, cipherTextElement, alphRussmall, alphEngsmall, keyElement, openTextElement);
    (Kotlin.isType(tmp$_6 = document.getElementById('swap-wrap'), HTMLButtonElement) ? tmp$_6 : throwCCE()).onclick = main$lambda_1;
  }
  _.transformKey_puj7f4$ = transformKey;
  _.transform_6hosri$ = transform;
  _.duplicate_61zpoe$ = duplicate;
  _.removeChar_4wanh1$ = removeChar;
  _.deletelettersfromalphabet_mtg1x$ = deletelettersfromalphabet;
  _.wordwithoutkey_6hosri$ = wordwithoutkey;
  _.swapElements_ny5lg4$ = swapElements;
  _.doSwap = doSwap;
  _.main = main;
  main();
  Kotlin.defineModule('untitled1', _);
  return _;
}(typeof untitled1 === 'undefined' ? {} : untitled1, kotlin);
