// Assuming the data is in the following format:
// {
//     chinese: [['你', '好'], ['我', '是', 'AI']],
//     pinyin: [['nǐ', 'hǎo'], ['wǒ', 'shì', 'AI']],
//     english: [['you', 'good'], ['I', 'am', 'AI']],
// }

// const data1 = {
//     chinese: [
//         ['小明', '是', '一个', '学生'],
//         ['他', '在', '北京', '上学'],
//         ['一天', '他', '在', '图书馆', '看书'],
//         ['突然', '他', '看到', '一个', '小女孩', '在', '哭'],
//         ['小明', '走过去', '问', '她', '你', '为什么', '哭'],
//         ['小女孩', '说', '我', '找不到', '我的', '妈妈', '了'],
//         ['小明', '说', '别', '担心', '我', '会', '帮', '你', '找', '你的', '妈妈'],
//         ['他们', '一起', '找', '了', '很', '久', '终于', '找到', '了', '小女孩', '的', '妈妈'],
//         ['妈妈', '很', '感谢', '小明', '的', '帮助'],
//         ['从', '那天', '起', '小明', '和', '小女孩', '成为', '了', '好朋友']
//     ],

//     pinyin: [
//         ['xiǎo míng', 'shì', 'yī gè', 'xué shēng'],
//         ['tā', 'zài', 'běi jīng', 'shàng xué'],
//         ['yī tiān', 'tā', 'zài', 'tú shū guǎn', 'kàn shū'],
//         ['tū rán', 'tā', 'kàn dào', 'yī gè', 'xiǎo nǚ hái', 'zài', 'kū'],
//         ['xiǎo míng', 'zǒu guò qù', 'wèn', 'tā', 'nǐ', 'wèi shén me', 'kū'],
//         ['xiǎo nǚ hái', 'shuō', 'wǒ', 'zhǎo bù dào', 'wǒ de', 'mā mā', 'le'],
//         ['xiǎo míng', 'shuō', 'bié', 'dān xīn', 'wǒ', 'huì', 'bāng', 'nǐ', 'zhǎo', 'nǐ de', 'mā mā'],
//         ['tā men', 'yī qǐ', 'zhǎo', 'le', 'hěn', 'jiǔ', 'zhōng yú', 'zhǎo dào', 'le', 'xiǎo nǚ hái', 'de', 'mā mā'],
//         ['mā mā', 'hěn', 'gǎn xiè', 'xiǎo míng', 'de', 'bāng zhù'],
//         ['cóng', 'nà tiān', 'qǐ', 'xiǎo míng', 'hé', 'xiǎo nǚ hái', 'chéng wéi', 'le', 'hǎo péng yǒu']
//     ],

//     english: [
//         ['Xiao Ming', 'is', 'a', 'student'],
//         ['He', 'studies', 'in', 'Beijing'],
//         ['One day', 'he', 'was', 'reading', 'in', 'the library'],
//         ['Suddenly', 'he', 'saw', 'a', 'little girl', 'crying'],
//         ['Xiao Ming', 'went over', 'and asked', 'her', 'why', 'are', 'you', 'crying'],
//         ['The little girl', 'said', 'I', 'can\'t', 'find', 'my', 'mom'],
//         ['Xiao Ming', 'said', 'don\'t', 'worry', 'I', 'will', 'help', 'you', 'find', 'your', 'mom'],
//         ['They', 'together', 'searched', 'for', 'a long', 'time', 'and finally', 'found', 'the', 'little girl\'s', 'mom'],
//         ['Mom', 'was', 'very', 'thankful', 'for', 'Xiao Ming\'s', 'help'],
//         ['From', 'that day', 'on', 'Xiao Ming', 'and', 'the little girl', 'became', 'good friends']
//     ],
//     grammar: [
//         ['Subject-Verb-Object (SVO) structure: "Subject(小明) + Verb(是) + Object(一个学生)"'],
//         ['Usage of "在" for action in progress or location'],
//         ['Use of "在" to denote an action happening at a specific location'],
//         ['Usage of "一个" to indicate "a" or "an"'],
//         ['Direct and Indirect Object sentence structure'],
//         ['Usage of "找不到" to indicate inability to find something'],
//         ['Use of "别" for giving negative commands (Don\'t...)'],
//         ['Usage of "一起" to indicate an action done together and "终于" to indicate "finally"'],
//         ['Use of "很" before an adjective'],
//         ['Usage of "从...起" to indicate "from...on" and "成为" to denote "become"']
//     ]
// }

const data = {
    "chinese": [
        ["在","一个","小镇","上","，","有","一个","小","女孩","爱","读书","。"],
        ["一天","，","她","去","了","镇上","的","图书馆","。"],
        ["她","在","那里","找到","了","一本","关于","公主","的","故事书","。"],
        ["小","女孩","很","高兴","，","因为","她","喜欢","公主","的","故事","。"],
        ["她","在","图书馆","里","快乐","地","读","了","一整天","。"]
    ],
    "pinyin": [
        ["zài","yī gè","xiǎo zhèn","shàng","，","yǒu","yī gè","xiǎo","nǚ hái","ài","dú shū","。"],
        ["yī tiān","，","tā","qù","le","zhèn shàng","de","tú shū guǎn","。"],
        ["tā","zài","nà lǐ","zhǎo dào","le","yī běn","guān yú","gōng zhǔ","de","gù shi shū","。"],
        ["xiǎo","nǚ hái","hěn","gāo xìng","，","yīn wèi","tā","xǐ huān","gōng zhǔ","de","gù shi","。"],
        ["tā","zài","tú shū guǎn","lǐ","kuài lè","de","dú","le","yī zhěng tiān","。"]
    ],
    "english": [
        ["in","a","small town","on","，","there is","a","small","girl","loves","reading","。"],
        ["one day","，","she","went","to","the town's","library","。"],
        ["she","at","there","found","a","book","about","princess","storybook","。"],
        ["small","girl","very","happy","，","because","she","likes","princess","story","。"],
        ["she","in","library","in","happily","read","for","a whole day","。"]
    ],
    "english_translation": [
        ["In a small town, there is a little girl who loves reading."],
        ["One day, she went to the town's library."],
        ["She found a storybook about a princess there."],
        ["The little girl was very happy, because she likes stories about princesses."],
        ["She read happily in the library for the whole day."]
    ],
    "grammar": [
        ["Use of 在...上 ('zài...shàng') to denote location, use of 有... ('yǒu...') to indicate existence, use of 爱... ('ài...') to express preference or fondness."],
        ["Use of 一天... ('yī tiān...') to indicate the passage of time, use of 去了... ('qù le...') to denote past action."],
        ["Use of 在那里 ('zài nà lǐ') to indicate specific location, use of 找到了... ('zhǎo dào le...') to indicate successful completion of an action, use of 关于...的... ('guān yú...de...') to denote topic."],
        ["Use of 很... ('hěn...') to express an adjective, use of 因为... ('yīn wèi...') to denote reason, use of 喜欢...的... ('xǐ huān...de...') to express preference."],
        ["Use of 在...里 ('zài...lǐ') to indicate location, use of 快乐地... ('kuài lè de...') as adverbial modifier, use of 了... ('le...') to denote completion of action."]
    ]
}


const storyPanel = document.getElementById('story-panel');
const translationPanel = document.getElementById('translation-panel');
// const data = // your data goes here

data.chinese.forEach((sentence, i) => {
    const sentenceElement = document.createElement('span');
    sentence.forEach((word, j) => {
        const wordElement = document.createElement('span');
        wordElement.classList.add('word');
        wordElement.textContent = word;
        wordElement.dataset.pinyin = data.pinyin[i][j];
        wordElement.dataset.english = data.english[i][j];
        
        const tooltip = document.createElement('span');
        tooltip.classList.add('tooltip');
        tooltip.textContent = `${data.pinyin[i][j]} - ${data.english[i][j]}`;
        wordElement.appendChild(tooltip);
        
        sentenceElement.appendChild(wordElement);
        sentenceElement.appendChild(document.createTextNode(' ')); // for spacing
    });
    
    // Append a period at the end of each sentence.
    const periodElement = document.createElement('span');
    // periodElement.textContent = '。';
    // sentenceElement.appendChild(periodElement);

    sentenceElement.addEventListener('click', () => {
        translationPanel.innerHTML = `<strong>Eng:</strong> ${data.english_translation[i]}
        <br><br><br>
        <strong>Grammar:</strong> ${data.grammar[i]}`;
    });
    
    storyPanel.appendChild(sentenceElement);
});

