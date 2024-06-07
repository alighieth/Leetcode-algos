function replaceWords(dictionary: string[], sentence: string): string {
    const dict_word_length = new Set<number>();
    const dict_map = new Map();
    const return_arr = new Array<string>;
  
    dictionary.forEach((item) => {
      dict_word_length.add(item.length);
      dict_map.set(item, item);
    });
  
    const splitted_sent = sentence.split(" ");
    for (let index = 0; index < splitted_sent.length; index++) {
      const element = splitted_sent[index];
  
      const new_word = getWordReplacment(dict_word_length, dict_map, element);
      return_arr.push(!!new_word ? new_word : element);
    }
  
    return return_arr.join(" ");
  }
  
  function getWordReplacment(
    dict_word_length: Set<number>,
    dict_map: Map<string, string>,
    word: string
  ): string | null {
    let return_word: string | null = null;
    const myArray = Array.from(dict_word_length);
    myArray.sort((a, b) => a - b);
    console.log(word)

    myArray.some((length) => {
      if (length > word.length) return false;
  
      const new_word = String(word).substring(0, length);
      if (dict_map.get(new_word) != null) {
        console.log(new_word)
        return_word = new_word;
        return true
      }
    });
  
    return return_word;
  }
  