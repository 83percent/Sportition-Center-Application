/**
 * 한글 초성 리스트
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
  const KOREAN_START = 0xac00; // '가'
  const KOREAN_END = 0xd7a3; // '힣'
  const INITIAL_OFFSET = 588;

  if (!char || typeof char !== "string" || char.length === 0) return null;

  const code = char.charCodeAt(0);

  // 한글 범위가 아닌 경우
  if (code < KOREAN_START || code > KOREAN_END) return null;

  const initialIndex = Math.floor((code - KOREAN_START) / INITIAL_OFFSET);
  return KOREAN_CONSONANTS[initialIndex];
}

/**
 * 그룹화 결과를 변환하는 함수
 * @param {Object} groupedResult - 기존 그룹화 결과
 * @returns {Array} 변환된 결과 배열
 */
function transformGroupedResult(groupedResult) {
  return Object.keys(groupedResult).map((key) => {
    return {
      filterValue: key,
      filterResultList: groupedResult[key]
    };
  });
}

/**
 * 데이터를 초성 기준으로 그룹화하는 함수
 * @param {Array} list - JSON 데이터 리스트
 * @returns {Object} - 초성과 영어 알파벳으로 그룹화된 결과
 */
function groupByFirstChar(list) {
  const result = {};

  // 한글 초성 그룹 초기화
  KOREAN_CONSONANTS.forEach((consonant) => {
    result[consonant] = [];
  });

  // 영어 알파벳 그룹 초기화
  for (let i = 97; i <= 122; i++) {
    const letter = String.fromCharCode(i);
    result[letter] = [];
  }

  list.forEach((item) => {
    const firstChar = item.name.trim().charAt(0).toLowerCase();

    // 한글 초성 처리
    const consonant = getKoreanConsonant(firstChar);
    if (consonant) {
      result[consonant].push(item);
      return;
    }

    // 영어 알파벳 처리
    if (/[a-z]/.test(firstChar)) {
      result[firstChar].push(item);
      return;
    }

    // 기타 처리 (숫자는 그룹화 대상 제외)
    if (!result["others"]) result["others"] = [];
    result["others"].push(item);
  });


  return transformGroupedResult(result).filter(element => element.filterResultList.length > 0);
}

  
export { groupByFirstChar };
