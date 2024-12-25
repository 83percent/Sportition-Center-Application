const exercise = [
    {
        lvl: 1,
        category: "upper", // 상체운동
        name: '상체',
        items: [
            {
                lvl: 2,
                category: 'chest', // 상체운동 - 가슴운동
                name: '가슴 운동',
                items: [
                    {
                        lvl: 3,
                        key: 'benchpress',
                        name: '벤치 프레스'
                    },
                    {
                        lvl: 3,
                        key: 'inclinebenchpress',
                        name: '벤치 프레스'
                    },
                ]
            },
            {
                lvl: 2,
                category: "back", // 상체운동 - 등운동
                name: '등 운동',
                items: [
                    {
                        lvl: 3,
                        key: 'deadlift',
                        name: '데드 리프트'
                    },
                ]
            }
        ]
    },
    {
        lvl: 1,
        category : "lower",
        name: '하체 운동',
        items: []
    },
    {
        lvl: 1,
        category : "arm",
        name: '팔 운동',
        items: []    
    },
]

export default exercise;
