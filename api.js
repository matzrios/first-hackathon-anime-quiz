const qs = [
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "The two main characters of &quot;No Game No Life&quot;, Sora and Shiro, together go by what name?",
        "correct_answer": "Blank",
        "incorrect_answers": [
            "Immanity",
            "Disboard",
            "Warbeasts"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "In the 9th Pokemon movie, who is the Prince of the Sea?",
        "correct_answer": "Manaphy",
        "incorrect_answers": [
            "Ash",
            "May",
            "Phantom"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "Which part from the JoJo&#039;s Bizarre Adventure manga is about a horse race across America?",
        "correct_answer": "Part 7: Steel Ball Run",
        "incorrect_answers": [
            "Part 6: Stone Ocean",
            "Part 3: Stardust Crusaders",
            "Part 5: Golden Wind"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "Who is the colossal titan in &quot;Attack On Titan&quot;?",
        "correct_answer": "Bertolt Hoover",
        "incorrect_answers": [
            "Reiner",
            "Eren",
            "Sasha"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "Who is the main character with yellow hair in the anime Naruto?",
        "correct_answer": "Naruto",
        "incorrect_answers": [
            "Ten Ten",
            "Sasuke",
            "Kakashi"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "In 2013, virtual pop-star Hatsune Miku had a sponsorship with which pizza chain?",
        "correct_answer": "Domino&#039;s",
        "incorrect_answers": [
            "Papa John&#039;s",
            "Pizza Hut",
            "Sabarro&#039;s"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "What is the age of Ash Ketchum in Pokemon when he starts his journey?",
        "correct_answer": "10",
        "incorrect_answers": [
            "11",
            "12",
            "9"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "Who is the main heroine of the anime, Full Metal Panic!",
        "correct_answer": "Kaname Chidori",
        "incorrect_answers": [
            "Teletha Testarossa",
            "Melissa Mao",
            "Kyoko Tokiwa"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "What is the name of Funny Valentine&#039;s stand in Jojo&#039;s Bizarre Adventure Part 7, Steel Ball Run?",
        "correct_answer": "Dirty Deeds Done Dirt Cheap",
        "incorrect_answers": [
            "Filthy Acts Done For A Reasonable Price",
            "Civil War",
            "God Bless The USA"
        ]
    },
    {
        "type": "multiple",
        "difficulty": "easy",
        "category": "Entertainment: Japanese Anime &amp; Manga",
        "question": "What year did &quot;Attack on Titan&quot; first air?",
        "correct_answer": "2013",
        "incorrect_answers": [
            "2014",
            "2012",
            "2015"
        ]
    }
]


class Api{
    constructor(category, level, type){
        this.baseUrl = "https://opentdb.com/api.php?",
        this.amount = "10",
        this.category = category,
        this.difficulty = level,
        this.type = type,
        this.cache = [
            
        ]
    }

    async getQuestions(){
        try {
            const response = await axios.post(
                `${this.baseUrl}amount=${this.amount}&category=${this.category}&difficulty=${this.difficulty}&type=${this.type}`
            );
            return response.data.results;
            // return qs;
        } catch (error) {
            // return error;
            return qs;
        }
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
}