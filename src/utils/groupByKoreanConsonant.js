/**
 * 주어진 한글 초성 리스트 (ㄱ ~ ㅎ).
 */
const KOREAN_CONSONANTS = [
    "ㄱ", "ㄴ", "ㄷ", "ㄹ", "ㅁ", "ㅂ", "ㅅ", "ㅇ", "ㅈ", "ㅊ", "ㅋ", "ㅌ", "ㅍ", "ㅎ"
  ];
  
  /**
   * 한글 초성 추출 함수
   * @param {string} char - 문자열의 첫 글자
   * @returns {string|null} - 초성을 반환하거나 null
   */
  function getKoreanConsonant(char) {
    const KOREAN_START = 0xac00;
    const KOREAN_END = 0xd7a3;
    const INITIAL_OFFSET = 588;
  
    if (!char || typeof char !== "string" || char.length === 0) return null;
  
    const code = char.charCodeAt(0);
  
    // 한글 범위가 아닌 경우
    if (code < KOREAN_START || code > KOREAN_END) return null;
  
    const initialIndex = Math.floor((code - KOREAN_START) / INITIAL_OFFSET);
    return KOREAN_CONSONANTS[initialIndex];
  }
  
  /**
   * 주어진 리스트를 초성 기준으로 그룹화
   * @param {Array} list - JSON 데이터 리스트
   * @returns {Object} - 그룹화된 결과 객체
   */
  function groupByKoreanConsonants(list) {
    const result = {};
  
    KOREAN_CONSONANTS.forEach((consonant) => {
      result[consonant] = {
        filterValue: consonant,
        filterResultList: [],
      };
    });
  
    list.forEach((item) => {
      const consonant = getKoreanConsonant(item.name.charAt(0));
      if (consonant && result[consonant]) {
        result[consonant].filterResultList.push(item);
      }
    });
  
    return result;
  }
  
  export { groupByKoreanConsonants };
