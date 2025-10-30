const emptyImg = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)

const scrollerImg = images.createImage(`
.
.
.
.
.
`)

const betterChars: Image[] = [];

const betterZero = images.createImage(`
. # . . .
# . # . .
# . # . .
# . # . .
. # . . .
`)

const betterOne = images.createImage(`
. # . . .
# # . . .
. # . . .
. # . . .
# # # . .
`)
const betterTwo = images.createImage(`
. # . . .
# . # . .
. . # . .
. # . . .
# # # . .
`)
const betterThree = images.createImage(`
# # . . .
. . # . .
. # # . .
. . # . .
# # . . .
`)
const betterFour = images.createImage(`
# . # . .
# . # . .
# # # . .
. . # . .
. . # . .
`)
const betterFive = images.createImage(`
# # # . .
# . . . .
# # . . .
. . # . .
# # . . .
`)
const betterSix = images.createImage(`
. # # . .
# . . . .
# # # . .
# . # . .
. # . . .
`)
const betterSeven = images.createImage(`
# # # . .
. . # . .
. # . . .
. # . . .
. # . . .
`)
const betterEight = images.createImage(`
# # # . .
# . # . .
. # . . .
# . # . .
# # # . .
`)
const betterNine = images.createImage(`
. # . . .
# . # . .
. # # . .
. . # . .
. . # . .
`)

const betterA = images.createImage(`
. # . . .
# . # . .
# # # . .
# . # . .
# . # . .
`)
const betterB = images.createImage(`
# # . . .
# . # . .
# # . . .
# . # . .
# # . . .
`)
const betterC = images.createImage(`
. # # # .
# . . . .
# . . . .
# . . . .
. # # # .
`)
const betterD = images.createImage(`
# # # . .
# . . # .
# . . # .
# . . # .
# # # . .
`)
const betterE = images.createImage(`
# # # . .
# . . . .
# # . . .
# . . . .
# # # . .
`)
const betterF = images.createImage(`
# # # . .
# . . . .
# # . . .
# . . . .
# . . . .
`)
const betterG = images.createImage(`
. # # . .
# . . . .
# . # # .
# . . # .
. # # . .
`)
const betterH = images.createImage(`
# . # . .
# . # . .
# # # . .
# . # . .
# . # . .
`)
const betterI = images.createImage(`
# # # . .
. # . . .
. # . . .
. # . . .
# # # . .
`)
const betterJ = images.createImage(`
. # # # .
. . # . .
. . # . .
# . # . .
. # # . .
`)
const betterK = images.createImage(`
# . # . .
# . # . .
# # . . .
# . # . .
# . # . .
`)
const betterL = images.createImage(`
# . . . .
# . . . .
# . . . .
# . . . .
# # # . .
`)
const betterM = images.createImage(`
# . . . #
# # . # #
# . # . #
# . . . #
# . . . #
`)
const betterN = images.createImage(`
# . . # .
# # . # .
# . # # .
# . . # .
# . . # .
`)
const betterO = images.createImage(`
. # # . .
# . . # .
# . . # .
# . . # .
. # # . .
`)
const betterP = images.createImage(`
# # . . .
# . # . .
# # . . .
# . . . .
# . . . .
`)
const betterQ = images.createImage(`
. # # . .
# . . # .
# . . # .
. # # . .
. . . # #
`)
const betterR = images.createImage(`
. # . . .
# . # . .
# # . . .
# . # . .
# . # . .
`)
const betterS = images.createImage(`
. # # . .
# . . . .
. # . . .
. . # . .
# # . . .
`)
const betterT = images.createImage(`
# # # . .
. # . . .
. # . . .
. # . . .
. # . . .
`)
const betterU = images.createImage(`
# . . # .
# . . # .
# . . # .
# . . # .
. # # . .
`)
const betterV = images.createImage(`
# . . . #
# . . . #
. # . # .
. # . # .
. . # . .
`)
const betterW = images.createImage(`
# . . . #
# . . . #
# . . . #
# . # . #
. # . # .
`)
const betterX = images.createImage(`
# . # . .
# . # . .
. # . . .
# . # . .
# . # . .
`)
const betterY = images.createImage(`
# . # . .
# . # . .
. # . . .
. # . . .
. # . . .
`)
const betterZ = images.createImage(`
# # # # #
. . . # .
. . # . .
. # . . .
# # # # #
`)
const bettera = images.createImage(`
. . . . .
# # # . .
# . # . .
# # # . .
. . # . .
`)
const betterb = images.createImage(`
# . . . .
# . . . .
# # # . .
# . # . .
# # # . .
`)
const betterc = images.createImage(`
. . . . .
. . . . .
. # # . .
# . . . .
. # # . .
`)
const betterd = images.createImage(`
. . # . .
. . # . .
# # # . .
# . # . .
# # # . .
`)
const bettere = images.createImage(`
. # # . .
# . . # .
# # # . .
# . . . .
. # # . .
`)
const betterf = images.createImage(`
. . # . .
. # . . .
# # # . .
. # . . .
. # . . .
`)
const betterg = images.createImage(`
. # . . .
# . # . .
. # # . .
. . # . .
# # . . .
`)
const betterh = images.createImage(`
# . . . .
# . . . .
# # . . .
# . # . .
# . # . .
`)
const betteri = images.createImage(`
. # . . .
. . . . .
# # . . .
. # . . .
# # # . .
`)
const betterj = images.createImage(`
. . # . .
. . . . .
. . # . .
# . # . .
. # . . .
`)
const betterk = images.createImage(`
. . . . .
# . . . .
# . # . .
# # . . .
# . # . .
`)
const betterl = images.createImage(`
# # . . .
. # . . .
. # . . .
. # . . .
# # # . .
`)
const betterm = images.createImage(`
. . . . .
. # . # .
# . # . #
# . # . #
# . . . #
`)
const bettern = images.createImage(`
. . . . .
# # . . .
# . # . .
# . # . .
# . # . .
`)
const bettero = images.createImage(`
. . . . .
. # . . .
# . # . .
# . # . .
. # . . .
`)
const betterp = images.createImage(`
. . . . .
. # . . .
# . # . .
# # . . .
# . . . .
`)
const betterq = images.createImage(`
. . . . .
. # . . .
# . # . .
. # # . .
. . # . .
`)
const betterr = images.createImage(`
. . . . .
. # . . .
# . # . .
# . . . .
# . . . .
`)
const betters = images.createImage(`
. # # . .
# . . . .
. # . . .
. . # . .
# # . . .
`)
const bettert = images.createImage(`
. . . . .
. # . . .
# # # . .
. # . . .
. # . . .
`)
const betteru = images.createImage(`
. . . . .
. . . . .
# . # . .
# . # . .
. # . . .
`)
const betterv = images.createImage(`
. . . . .
. . . . .
# . . . #
. # . # .
. . # . .
`)
const betterw = images.createImage(`
. . . . .
. . . . .
# . . . #
# . # . #
. # . # .
`)
const betterx = images.createImage(`
. . . . .
. . . . .
# . # . .
. # . . .
# . # . .
`)
const bettery = images.createImage(`
. . . . .
. . . . .
# . # . .
. # . . .
# . . . .
`)
const betterz = images.createImage(`
. . . . .
# # # # .
. . # . .
. # . . .
# # # # .
`)
const betterTilde = images.createImage(`
. . . . .
# # . . .
. . # # .
. . . . .
. . . . .
`)
const betterAt = images.createImage(`
. # # # .
# . . . #
# . # . #
# . . # #
. # # . .
`)
const betterAsterisk = images.createImage(`
. # . # .
. . # . .
. # . # .
. . . . .
. . . . .
`)
const betterQuestion = images.createImage(`
# # . . .
. . # . .
. # . . .
. . . . .
. # . . .
`)
const betterExclamation = images.createImage(`
. # . . .
. # . . .
. # . . .
. . . . .
. # . . .
`)
const betterHash = images.createImage(`
. # . # .
# # # # #
. # . # .
# # # # #
. # . # .
`)
const betterDollar = images.createImage(`
. # # # .
# . # . .
. # # # .
. . # . #
. # # # .
`)
const betterPercent = images.createImage(`
# # . . #
# # . # .
. . # . .
. # . # #
# . . # #
`)
const betterUp = images.createImage(`
. . # . .
. # . # .
. . . . .
. . . . .
. . . . .
`)
const betterOpenPar = images.createImage(`
. . # . .
. # . . .
. # . . .
. # . . .
. . # . .
`)
const betterClosePar = images.createImage(`
. # . . .
. . # . .
. . # . .
. . # . .
. # . . .
`)
const betterOpenBracket = images.createImage(`
. # # . .
. # . . .
. # . . .
. # . . .
. # # . .
`)
const betterCloseBracket = images.createImage(`
. # # . .
. . # . .
. . # . .
. . # . .
. # # . .
`)
const betterOpenBrace = images.createImage(`
. # # . .
. # . . .
# # . . .
. # . . .
. # # . .
`)
const betterCloseBrace = images.createImage(`
. # # . .
. . # . .
. . # # .
. . # . .
. # # . .
`)
const betterSlash = images.createImage(`
. . . # .
. . # . .
. . # . .
. # . . .
. # . . .
`)
const betterColon = images.createImage(`
. . . . .
. # . . .
. . . . .
. # . . .
. . . . .
`)
const betterSemicolon = images.createImage(`
. . . . .
. # . . .
. . . . .
. # . . .
# . . . .
`)
const betterSingleQuote = images.createImage(`
. # . . .
. # . . .
. . . . .
. . . . .
. . . . .
`)
const betterDoubleQuote = images.createImage(`
# . # . .
# . # . .
. . . . .
. . . . .
. . . . .
`)
const betterPlus = images.createImage(`
. . . . .
. . # . .
. # # # .
. . # . .
. . . . .
`)
const betterMinus = images.createImage(`
. . . . .
. . . . .
. # # # .
. . . . .
. . . . .
`)
const betterUnderscore = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
# # # # #
`)
const betterEquals = images.createImage(`
. . . . .
# # # # .
. . . . .
# # # # .
. . . . .
`)
const betterLess = images.createImage(`
. . . # #
. # # . .
# . . . .
. # # . .
. . . # #
`)
const betterGreater = images.createImage(`
# # . . .
. . # # .
. . . . #
. . # # .
# # . . .
`)
const betterPeriod = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. # . . .
`)
const betterComma = images.createImage(`
. . . . .
. . . . .
. . . . .
. # . . .
# . . . .
`)
const betterAnd = images.createImage(`
. # # . .
# . . # .
. # # . .
# . . # .
. # # . #
`)

/* template for creating more
const better = images.createImage(`
. . . . .
. . . . .
. . . . .
. . . . .
. . . . .
`)
*/


let imageMap: { [key: string]: Image };
imageMap = {
    "0": betterZero,
    "1": betterOne,
    "2": betterTwo,
    "3": betterThree,
    "4": betterFour,
    "5": betterFive,
    "6": betterSix,
    "7": betterSeven,
    "8": betterEight,
    "9": betterNine,
    "A": betterA,
    "B": betterB,
    "C": betterC,
    "D": betterD,
    "E": betterE,
    "F": betterF,
    "G": betterG,
    "H": betterH,
    "I": betterI,
    "J": betterJ,
    "K": betterK,
    "L": betterL,
    "M": betterM,
    "N": betterN,
    "O": betterO,
    "P": betterP,
    "Q": betterQ,
    "R": betterR,
    "S": betterS,
    "T": betterT,
    "U": betterU,
    "V": betterV,
    "W": betterW,
    "X": betterX,
    "Y": betterY,
    "Z": betterZ,
    "a": bettera,
    "b": betterb,
    "c": betterc,
    "d": betterd,
    "e": bettere,
    "f": betterf,
    "g": betterg,
    "h": betterh,
    "i": betteri,
    "j": betterj,
    "k": betterk,
    "l": betterl,
    "m": betterm,
    "n": bettern,
    "o": bettero,
    "p": betterp,
    "q": betterq,
    "r": betterr,
    "s": betters,
    "t": bettert,
    "u": betteru,
    "v": betterv,
    "w": betterw,
    "x": betterx,
    "y": bettery,
    "z": betterz,
    "~": betterTilde,
    "@": betterAt,
    "*": betterAsterisk,
    "?": betterQuestion,
    "!": betterExclamation,
    "#": betterHash,
    "$": betterDollar,
    "%": betterPercent,
    "^": betterUp,
    "(": betterOpenPar,
    ")": betterClosePar,
    "[": betterOpenBracket,
    "]": betterCloseBracket,
    "{": betterOpenBrace,
    "}": betterCloseBrace,
    "/": betterSlash,
    ":": betterColon,
    ";": betterSemicolon,
    "'": betterSingleQuote,
    '"': betterDoubleQuote,
    "+": betterPlus,
    "-": betterMinus,
    "_": betterUnderscore,
    "=": betterEquals,
    "<": betterLess,
    ">": betterGreater,
    ".": betterPeriod,
    ",": betterComma,
    "&": betterAnd,
    " ": emptyImg
}



//% color=190 weight=100 icon="\uf031" block="Better Text"
namespace betterText {
    //% block="show text $value with interval $interval ms and pause $pause ms and spacer $spacer between characters"
    //% interval.defl=250
    //% pause.defl=0
    //% spacer.defl=1
    export function showText(value: string, interval = 250, pause = 0, spacer: number) {
        for (let i = 0; i < value.length; i++) {
            const char = value.charAt(i);
            const image = imageMap[char]; // Get the corresponding image from the map

            if (image) { // Check if an image was found for the character
                if (spacer != 0) scrollerImg.scrollImage(spacer - 1, interval);
                image.scrollImage(1, interval);
                basic.pause(pause);
            } else {
                // Handle unsupported characters: display the default character
                basic.showString(char, interval);
            }
        }
    }

    //% block
    export function scrollClear(time = 0) {
        emptyImg.scrollImage(1, time);
    }
}