// Global Variables
var currentQuestion = 0;
var userSelection;
var timer;

// Quiz Data
var allQuizData = {
    "ExampleSet": [
        {
            question: "Wat is het geboortejaar van X?",
            options: ["1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
            correctAnswer: ""
        },
        {
            question: "Wat is de geboortemaand van X?",
            options: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            correctAnswer: ""
        },
        {
            question: "Wat de geboortedag van X?",
            options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            correctAnswer: ""
        },
        // {
        //     question: "Hoe oud is X?",
        //     options: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"],
        //     correctAnswer: ""
        // },
        {
            question: "Hoe lang is X?",
            options: ["160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200"],
            correctAnswer: ""
        },
        {
            question: "Wat is de schoenmaat van X?",
            options: ["35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
            correctAnswer: ""
        },
        {
            question: "Wat is de lievelingskleur van X?",
            options: ["1. Roze, 2. paars en 3. oranje","Blauw","Donkerblauw","Flessengroen","Geel","Groen","Roest","Rood","Zwart"],
            correctAnswer: ""
        },
        {
            question: "Waarheen ging de laatste vakantie van X?",
            options: ["Egypte", "Frankrijk", "Maleisië", "Nederland", "Spanje"],
            correctAnswer: ""
        },
        {
            question: "Wat is het favoriete seizoen van X?",
            options: ["Winter","Lente","Zomer","Herfst", "Alle seizoenen zijn prima"],
            correctAnswer: ""
        },        {
            question: "Wat is de favoriete TV-serie allertijden van X?",
            options: ["Breaking bad","Engelse detective series","Goede tijden, slechte tijden","Handmaids tale/married at first sight australie","Mc Gyver","Meiland/de augurkenkoning","VI","Wie is de mol?"],
            correctAnswer: ""
        },
        {
            question: "Wat is het lievelingseten van X?",
            options: ["Brood","Chinees","Pasta","Pasta bolognese","Sate met opgepakte aardappelen","Stoofperen","Sushi en frikandellen"],
            correctAnswer: ""
        },
        {
            question: "Wat is het favoriete nummer en/of artiest van X?",
            options: ["Heb ik niet echt, zou zeggen andre hazes","I want it that way, backstreet boys","Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)","Paradise by the dashboardlight - meat loaf","Vanilla ice (ice baby)","Queen, I want to break free"],
            correctAnswer: ""
        },
        {
            question: "Als X zou moeten emigreren, waar zou die dan heen gaan?",
            options: ["Bali (Indonesie)","Indonesië","Italie","Italië of Spanje, naar m'n zus","Nergens","Spanje","Spanje, Mallorca"],
            correctAnswer: ""
        },
        {
            question: "Wat is de lievelingssport van X?",
            options: ["Geen!","Golf","Schaatsen","Shoppen","Softbal","Voetbal"],
            correctAnswer: ""
        },
        {
            question: "Wat is het verborgen talent van X?",
            options: ["Dat ik heel goed dingen kan regelen (zoals een hele vakantie!)","Eigenlijk ben ik heel slim","Enorm gevoelig","Heb ik niet","Heb ik niet, ze liggen al op tafel","Ik kan met mn tong mn neus aanraken","Mijzelf zijn","Té goed verborgen"],
            correctAnswer: ""
        },
        {
            question: "Wie is het idool van X?",
            options: ["Al mijn familie","Geen","Geraldine kemper","Harrison Ford","De vader van Mandy","Me vader","Sam smith","Vader en zoon Verhulst"],
            correctAnswer: ""
        },
        {
            question: "Welke superkracht zou X willen hebben?",
            options: ["Kunnen vliegen","Onverwoestbaar","Onzichtbaar zijn","Teleporteren","Transporteren"],
            correctAnswer: ""
        },
        {
            question: "Hoe veel broers/zussen heeft/had X?",
            options: ["0","1","2","3","4","5","6"],
            correctAnswer: ""
        },
        {
            question: "Wat voor auto heeft X?",
            options: ["Kia Niro","Mazda mx30","Renault clio","Renault Megane E Tech","Toyota Aygo","Volvo"],
            correctAnswer: ""
        },
        {
            question: "Hoe veel keer is X verhuisd?",
            options: ["0","1","2","3","4","5","6","7","8","9","10"],
            correctAnswer: ""
        },
        // {
        //     question: "van X?",
        //     options: [
                
        //         ],
        //     correctAnswer: ""
        // }
    ],
    "Alex": [
        {
            question: "Wat is het geboortejaar van Johan?",
            options: ["1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
            correctAnswer: "1946"
        },
        {
            question: "Wat is de geboortemaand van Patrick?",
            options: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            correctAnswer: "mei"
        },
        {
            question: "Wat de geboortedag van Romy?",
            options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            correctAnswer: "9"
        },
        {
            question: "Hoe lang is Myrna?",
            options: ["160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200"],
            correctAnswer: "167"
        },
        {
            question: "Wat is de schoenmaat van Ria?",
            options: ["35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
            correctAnswer: "40"
        },
        {
            question: "Wat is de lievelingskleur van Maureen?",
            options: ["1. Roze, 2. paars en 3. oranje","Blauw","Donkerblauw","Flessengroen","Geel","Groen","Roest","Rood","Zwart"],
            correctAnswer: "Roest"
        },
        {
            question: "Waarheen ging de laatste vakantie van Patrick?",
            options: ["Egypte", "Frankrijk", "Maleisië", "Nederland", "Spanje"],
            correctAnswer: "Maleisië"
        },
        {
            question: "Wat is het favoriete seizoen van Timo?",
            options: ["Winter","Lente","Zomer","Herfst", "Alle seizoenen zijn prima"],
            correctAnswer: "Lente"
        },        {
            question: "Wat is de favoriete TV-serie allertijden van Ria?",
            options: ["Breaking bad","Engelse detective series","Goede tijden, slechte tijden","Handmaids tale/married at first sight australie","Mc Gyver","Meiland/de augurkenkoning","VI","Wie is de mol?"],
            correctAnswer: "VI"
        },
        {
            question: "Wat is het lievelingseten van Maureen?",
            options: ["Brood","Chinees","Pasta","Pasta bolognese","Sate met opgepakte aardappelen","Stoofperen","Sushi en frikandellen"],
            correctAnswer: "Pasta"
        },
        {
            question: "Wat is het favoriete nummer en/of artiest van Patrick?",
            options: ["Heb ik niet echt, zou zeggen andre hazes","I want it that way, backstreet boys","Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)","Paradise by the dashboardlight - meat loaf","Vanilla ice (ice baby)","Queen, I want to break free"],
            correctAnswer: "Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)"
        },
        {
            question: "Als Romy zou moeten emigreren, waar zou die dan heen gaan?",
            options: ["Bali (Indonesie)","Indonesië","Italie","Italië of Spanje, naar m'n zus","Nergens","Spanje","Spanje, Mallorca"],
            correctAnswer: "Spanje, Mallorca"
        },
        {
            question: "Wat is de lievelingssport van Johan?",
            options: ["Geen!","Golf","Schaatsen","Shoppen","Softbal","Voetbal"],
            correctAnswer: "Golf"
        },
        {
            question: "Wat is het verborgen talent van Timo?",
            options: ["Dat ik heel goed dingen kan regelen (zoals een hele vakantie!)","Eigenlijk ben ik heel slim","Enorm gevoelig","Heb ik niet","Heb ik niet, ze liggen al op tafel","Ik kan met mn tong mn neus aanraken","Mijzelf zijn","Té goed verborgen"],
            correctAnswer: "Heb ik niet, ze liggen al op tafel"
        },
        {
            question: "Wie is het idool van Romy?",
            options: ["Al mijn familie","Geen","Geraldine kemper","Harrison Ford","De vader van Mandy","Me vader","Sam smith","Vader en zoon Verhulst"],
            correctAnswer: "Sam smith"
        },
        {
            question: "Welke superkracht zou Myrna willen hebben?",
            options: ["Kunnen vliegen","Onverwoestbaar","Onzichtbaar zijn","Teleporteren","Transporteren"],
            correctAnswer: "Onzichtbaar zijn"
        },
        {
            question: "Hoe veel broers/zussen heeft/had Romy?",
            options: ["0","1","2","3","4","5","6"],
            correctAnswer: "1"
        },
        {
            question: "Wat voor auto heeft Ria?",
            options: ["Kia Niro","Mazda mx30","Renault clio","Renault Megane E Tech","Toyota Aygo","Volvo"],
            correctAnswer: "Kia Niro"
        },

        {
            question: "Hoe veel keer is Myrna verhuisd?",
            options: ["0","1","2","3","4","5","6","7","8","9","10"],
            correctAnswer: "9"
        },
        // {
        //     question: "van X?",
        //     options: [
                
        //         ],
        //     correctAnswer: ""
        // }
    ],
    "Johan": [
        {
            question: "Wat is het geboortejaar van Maureen?",
            options: ["1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
            correctAnswer: "1994"
        },
        {
            question: "Wat is de geboortemaand van Romy?",
            options: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            correctAnswer: "juli"
        },
        {
            question: "Wat de geboortedag van Alex?",
            options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            correctAnswer: "22"
        },
        {
            question: "Hoe lang is Patrick?",
            options: ["160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200"],
            correctAnswer: "174"
        },
        {
            question: "Wat is de schoenmaat van Timo?",
            options: ["35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
            correctAnswer: "46"
        },
        {
            question: "Wat is de lievelingskleur van Ria?",
            options: ["1. Roze, 2. paars en 3. oranje","Blauw","Donkerblauw","Flessengroen","Geel","Groen","Roest","Rood","Zwart"],
            correctAnswer: "Zwart"
        },
        {
            question: "Waarheen ging de laatste vakantie van Myrna?",
            options: ["Egypte", "Frankrijk", "Maleisië", "Nederland", "Spanje"],
            correctAnswer: "Maleisië"
        },
        {
            question: "Wat is het favoriete seizoen van Maureen?",
            options: ["Winter","Lente","Zomer","Herfst", "Alle seizoenen zijn prima"],
            correctAnswer: "Lente"
        },        {
            question: "Wat is de favoriete TV-serie allertijden van Romy?",
            options: ["Breaking bad","Engelse detective series","Goede tijden, slechte tijden","Handmaids tale/married at first sight australie","Mc Gyver","Meiland/de augurkenkoning","VI","Wie is de mol?"],
            correctAnswer: "Handmaids tale/married at first sight australie"
        },
        {
            question: "Wat is het lievelingseten van Alex?",
            options: ["Brood","Chinees","Pasta","Pasta bolognese","Sate met opgepakte aardappelen","Stoofperen","Sushi en frikandellen"],
            correctAnswer: "Pasta"
        },
        {
            question: "Wat is het favoriete nummer en/of artiest van Patrick?",
            options: ["Heb ik niet echt, zou zeggen andre hazes","I want it that way, backstreet boys","Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)","Paradise by the dashboardlight - meat loaf","Vanilla ice (ice baby)","Queen, I want to break free"],
            correctAnswer: "Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)"
        },
        {
            question: "Als Timo zou moeten emigreren, waar zou die dan heen gaan?",
            options: ["Bali (Indonesie)","Indonesië","Italie","Italië of Spanje, naar m'n zus","Nergens","Spanje","Spanje, Mallorca"],
            correctAnswer: "Spanje"
        },
        {
            question: "Wat is de lievelingssport van Alex?",
            options: ["Geen!","Golf","Schaatsen","Shoppen","Softbal","Voetbal"],
            correctAnswer: "Voetbal"
        },
        {
            question: "Wat is het verborgen talent van Myrna?",
            options: ["Dat ik heel goed dingen kan regelen (zoals een hele vakantie!)","Eigenlijk ben ik heel slim","Enorm gevoelig","Heb ik niet","Heb ik niet, ze liggen al op tafel","Ik kan met mn tong mn neus aanraken","Mijzelf zijn","Té goed verborgen"],
            correctAnswer: "Dat ik heel goed dingen kan regelen (zoals een hele vakantie!)"
        },
        {
            question: "Wie is het idool van Ria?",
            options: ["Al mijn familie","Geen","Geraldine kemper","Harrison Ford","De vader van Mandy","Me vader","Sam smith","Vader en zoon Verhulst"],
            correctAnswer: "Al mijn familie"
        },
        {
            question: "Hoe veel broers/zussen heeft/had Patrick?",
            options: ["0","1","2","3","4","5","6"],
            correctAnswer: "2"
        },
        {
            question: "Wat voor auto heeft Maureen?",
            options: ["Kia Niro","Mazda mx30","Renault clio","Renault Megane E Tech","Toyota Aygo","Volvo"],
            correctAnswer: "Toyota Aygo"
        },
        {
            question: "Hoe veel keer is Romy verhuisd?",
            options: ["0","1","2","3","4","5","6","7","8","9","10"],
            correctAnswer: "5"
        },
        // {
        //     question: "van X?",
        //     options: [
                
        //         ],
        //     correctAnswer: ""
        // }
    ],
    "Maureen": [
        {
            question: "Wat is het geboortejaar van Ria?",
            options: ["1920", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
            correctAnswer: "1947"
        },
        {
            question: "Wat is de geboortemaand van Timo?",
            options: ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"],
            correctAnswer: "april"
        },
        {
            question: "Wat de geboortedag van Myrna?",
            options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
            correctAnswer: "26"
        },
        // {
        //     question: "Hoe oud is X?",
        //     options: ["20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"],
        //     correctAnswer: ""
        // },
        {
            question: "Hoe lang is Johan?",
            options: ["160","161","162","163","164","165","166","167","168","169","170","171","172","173","174","175","176","177","178","179","180","181","182","183","184","185","186","187","188","189","190","191","192","193","194","195","196","197","198","199","200"],
            correctAnswer: "178"
        },
        {
            question: "Wat is de schoenmaat van Patrick?",
            options: ["35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"],
            correctAnswer: "41"
        },
        {
            question: "Wat is de lievelingskleur van Romy?",
            options: ["1. Roze, 2. paars en 3. oranje","Blauw","Donkerblauw","Flessengroen","Geel","Groen","Roest","Rood","Zwart"],
            correctAnswer: "1. Roze, 2. paars en 3. oranje"
        },
        {
            question: "Waarheen ging de laatste vakantie van Ria?",
            options: ["Egypte", "Frankrijk", "Maleisië", "Nederland", "Spanje"],
            correctAnswer: "Nederland"
        },
        {
            question: "Wat is het favoriete seizoen van Myrna?",
            options: ["Winter","Lente","Zomer","Herfst", "Alle seizoenen zijn prima"],
            correctAnswer: "Winter"
        },
        {
            question: "Wat is de favoriete TV-serie allertijden van Johan?",
            options: ["Breaking bad","Engelse detective series","Goede tijden, slechte tijden","Handmaids tale/married at first sight australie","Mc Gyver","Meiland/de augurkenkoning","VI","Wie is de mol?"],
            correctAnswer: "Goede tijden, slechte tijden"
        },
        {
            question: "Wat is het lievelingseten van Timo?",
            options: ["Brood","Chinees","Pasta","Pasta bolognese","Sate met opgepakte aardappelen","Stoofperen","Sushi en frikandellen"],
            correctAnswer: "Pasta bolognese"
        },
        {
            question: "Wat is het favoriete nummer en/of artiest van Romy?",
            options: ["Heb ik niet echt, zou zeggen andre hazes","I want it that way, backstreet boys","Laatste rondje - Hazes. (het is tijd, de hoogste tijd...)","Paradise by the dashboardlight - meat loaf","Vanilla ice (ice baby)","Queen, I want to break free"],
            correctAnswer: "I want it that way, backstreet boys"
        },
        {
            question: "Als Ria zou moeten emigreren, waar zou die dan heen gaan?",
            options: ["Bali (Indonesie)","Indonesië","Italie","Italië of Spanje, naar m'n zus","Nergens","Spanje","Spanje, Mallorca"],
            correctAnswer: "Nergens"
        },
        {
            question: "Wat is de lievelingssport van Myrna?",
            options: ["Geen!","Golf","Schaatsen","Shoppen","Softbal","Voetbal"],
            correctAnswer: "Softbal"
        },
        {
            question: "Wat is het verborgen talent van Patrick?",
            options: ["Dat ik heel goed dingen kan regelen (zoals een hele vakantie!)","Eigenlijk ben ik heel slim","Enorm gevoelig","Heb ik niet","Heb ik niet, ze liggen al op tafel","Ik kan met mn tong mn neus aanraken","Mijzelf zijn","Té goed verborgen"],
            correctAnswer: "Enorm gevoelig"
        },
        {
            question: "Wie is het idool van Alex?",
            options: ["Al mijn familie","Geen","Geraldine kemper","Harrison Ford","De vader van Mandy","Me vader","Sam smith","Vader en zoon Verhulst"],
            correctAnswer: "Geraldine kemper"
        },
        {
            question: "Welke superkracht zou Timo willen hebben?",
            options: ["Kunnen vliegen","Onverwoestbaar","Onzichtbaar zijn","Teleporteren","Transporteren"],
            correctAnswer: "Teleporteren"
        },
        {
            question: "Hoe veel broers/zussen heeft/had Johan?",
            options: ["0","1","2","3","4","5","6"],
            correctAnswer: "2"
        },
        {
            question: "Wat voor auto heeft Romy?",
            options: ["Kia Niro","Mazda mx30","Renault clio","Renault Megane E Tech","Toyota Aygo","Volvo"],
            correctAnswer: "Toyota Aygo"
        },
        {
            question: "Hoe veel keer is Patrick verhuisd?",
            options: ["0","1","2","3","4","5","6","7","8","9","10"],
            correctAnswer: "5"
        },
        // {
        //     question: "van X?",
        //     options: [
                
        //         ],
        //     correctAnswer: ""
        // }
    ],
    "Myrna": [
        {
            question: "Sample Question 1? Myrna",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
    ],
    "Patrick": [
        {
            question: "Sample Question 1? Patrick",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
    ],
    "Ria": [
        {
            question: "Sample Question 1? Ria",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Ria",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Romy": [
        {
            question: "Sample Question 1? Romy",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? Romy",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ],
    "Timo": [
        {
            question: "Sample Question 1? timo",
            options: ["Option 1", "Option 2", "Option 3"],
            correctAnswer: "Option 1"
        },
        {
            question: "Sample Question 2? timo",
            options: ["Option A", "Option B", "Option C"],
            correctAnswer: "Option B"
        },
    ]
};

var quizData = [];

// Start Quiz Function
function startQuiz() {
    userSelection = document.getElementById("userName").value;
    quizData = allQuizData[userSelection];
    document.getElementById("userSelection").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showNextQuestion();
}

// Show Next Question Function
function showNextQuestion() {
    if (currentQuestion < quizData.length) {
        var currentQuizQuestion = quizData[currentQuestion];
        document.getElementById("questionText").textContent = currentQuizQuestion.question;

        var answerOptionsSelect = document.getElementById("answerOptions");
        answerOptionsSelect.innerHTML = "";

        currentQuizQuestion.options.forEach(function (option) {
            var optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option;
            answerOptionsSelect.appendChild(optionElement);
        });
    } else {
        // Quiz Completed, Show Image
        document.getElementById("quiz").style.display = "none";
        document.getElementById("winImage").src = "/images/codeImages/" + userSelection + ".png";
        document.getElementById("imageDisplay").style.display = "block";
    }
}

// Check Answer Function
function checkAnswer() {
    var selectedAnswer = document.getElementById("answerOptions").value;
    var currentQuizQuestion = quizData[currentQuestion];

    if (selectedAnswer === currentQuizQuestion.correctAnswer) {
        currentQuestion++;
        resetTimer();
        showNextQuestion();
    } else {
        document.getElementById("quizButton").disabled = true;
        startTimer();
    }
}

// Timer Functions
function startTimer() {
    var timeLeft = 5; // seconds

    timer = setInterval(function () {
        document.getElementById("timer").textContent = "Fout! Voor straf moet je nog " + timeLeft + " seconden wachten om verder te gaan.";

        if (timeLeft <= 0) {
            clearInterval(timer);
            resetTimer();
        }

        timeLeft--;
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    document.getElementById("timer").textContent = "";
    document.getElementById("quizButton").disabled = false;
}

// Initialize Quiz on Page Load
document.addEventListener("DOMContentLoaded", function () {
    // Load any initializations or actions here
});


// particles.js configuration
particlesJS("particles-js", {
    particles: {
        number: {
            value: 52,
            density: {
                enable: true,
                value_area: 631.3280775270874
            }
        },
        color: {
            value: "#fff"
        },
        // shape: {
        //     type: "circle",
        //     stroke: {
        //         width: 0,
        //         color: "#000000"
        //     },
        //     polygon: {
        //         nb_sides: 5
        //     },
        //     image: {
        //         src: "img/github.svg",
        //         width: 100,
        //         height: 100
        //     }
        // },
        shape: {
            type: "image",
            image: {
               src: "images/snowflake.png", // Set image path. 
               width: 1,   // Width and height don't decide size. 
               height: 1   // They just decide aspect ratio. 
            }
          },
        opacity: {
            value: 0.5,
            random: true,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 500,
            color: "#ffffff",
            opacity: 0.4,
            width: 2
        },
        move: {
            enable: true,
            speed: 1.5,
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false,
                mode: "bubble"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 0.5
                }
            },
            bubble: {
                distance: 400,
                size: 4,
                duration: 0.3,
                opacity: 1,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = "absolute";
stats.domElement.style.left = "0px";
stats.domElement.style.top = "0px";
document.body.appendChild(stats.domElement);
count_particles = document.querySelector(".js-count-particles");
update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};
requestAnimationFrame(update);
