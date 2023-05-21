// Assuming the data is in the following format:
// {
//     chinese: [['你', '好'], ['我', '是', 'AI']],
//     pinyin: [['nǐ', 'hǎo'], ['wǒ', 'shì', 'AI']],
//     english: [['you', 'good'], ['I', 'am', 'AI']],
// }
const data = {
    chinese: [
        ['小明', '是', '一个', '学生'],
        ['他', '在', '北京', '上学'],
        ['一天', '他', '在', '图书馆', '看书'],
        ['突然', '他', '看到', '一个', '小女孩', '在', '哭'],
        ['小明', '走过去', '问', '她', '你', '为什么', '哭'],
        ['小女孩', '说', '我', '找不到', '我的', '妈妈', '了'],
        ['小明', '说', '别', '担心', '我', '会', '帮', '你', '找', '你的', '妈妈'],
        ['他们', '一起', '找', '了', '很', '久', '终于', '找到', '了', '小女孩', '的', '妈妈'],
        ['妈妈', '很', '感谢', '小明', '的', '帮助'],
        ['从', '那天', '起', '小明', '和', '小女孩', '成为', '了', '好朋友']
    ],

    pinyin: [
        ['xiǎo míng', 'shì', 'yī gè', 'xué shēng'],
        ['tā', 'zài', 'běi jīng', 'shàng xué'],
        ['yī tiān', 'tā', 'zài', 'tú shū guǎn', 'kàn shū'],
        ['tū rán', 'tā', 'kàn dào', 'yī gè', 'xiǎo nǚ hái', 'zài', 'kū'],
        ['xiǎo míng', 'zǒu guò qù', 'wèn', 'tā', 'nǐ', 'wèi shén me', 'kū'],
        ['xiǎo nǚ hái', 'shuō', 'wǒ', 'zhǎo bù dào', 'wǒ de', 'mā mā', 'le'],
        ['xiǎo míng', 'shuō', 'bié', 'dān xīn', 'wǒ', 'huì', 'bāng', 'nǐ', 'zhǎo', 'nǐ de', 'mā mā'],
        ['tā men', 'yī qǐ', 'zhǎo', 'le', 'hěn', 'jiǔ', 'zhōng yú', 'zhǎo dào', 'le', 'xiǎo nǚ hái', 'de', 'mā mā'],
        ['mā mā', 'hěn', 'gǎn xiè', 'xiǎo míng', 'de', 'bāng zhù'],
        ['cóng', 'nà tiān', 'qǐ', 'xiǎo míng', 'hé', 'xiǎo nǚ hái', 'chéng wéi', 'le', 'hǎo péng yǒu']
    ],

    english: [
        ['Xiao Ming', 'is', 'a', 'student'],
        ['He', 'studies', 'in', 'Beijing'],
        ['One day', 'he', 'was', 'reading', 'in', 'the library'],
        ['Suddenly', 'he', 'saw', 'a', 'little girl', 'crying'],
        ['Xiao Ming', 'went over', 'and asked', 'her', 'why', 'are', 'you', 'crying'],
        ['The little girl', 'said', 'I', 'can\'t', 'find', 'my', 'mom'],
        ['Xiao Ming', 'said', 'don\'t', 'worry', 'I', 'will', 'help', 'you', 'find', 'your', 'mom'],
        ['They', 'together', 'searched', 'for', 'a long', 'time', 'and finally', 'found', 'the', 'little girl\'s', 'mom'],
        ['Mom', 'was', 'very', 'thankful', 'for', 'Xiao Ming\'s', 'help'],
        ['From', 'that day', 'on', 'Xiao Ming', 'and', 'the little girl', 'became', 'good friends']
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
    
    sentenceElement.addEventListener('click', () => {
        translationPanel.textContent = `Eng: ${data.english[i].join(' ')}`;
    });
    
    storyPanel.appendChild(sentenceElement);
});

