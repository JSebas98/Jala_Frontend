"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonTrainer = exports.Pokemon = exports.getRandomNumbers = exports.getRandomPokemonMoves = exports.getPokemonTypes = exports.getInfoPokemon = exports.getSingleMove = exports.getSinglePokemon = void 0;
var axios_1 = require("axios");
/*

Pokemon class
  - one pokemon has name, id, types and moves
  

List of goals:
  - create a function to get all information of a pokemon from result of getSinglePokemon
  - CHECK - get a List of types from a pokemon, assing to a variable called types
  - CHECK - get a List of moves from a pokemon, you can only choose 4 moves by pokemon, those moves should be aleatory
  - fill Moves with missing data from Types you can get the information from url of the move.
  - re-write decortator to get new pokemons Ids in PokemonTrainer class randomly
*/
var POKEMON_MOVES = 4;
var TEAM_SIZE = 3;
var NUMBER_OF_POKEMONS = 500;
function getSinglePokemon(id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get("https://pokeapi.co/api/v2/pokemon/".concat(id))];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSinglePokemon = getSinglePokemon;
function getSingleMove(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, axios_1.default.get(url)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
exports.getSingleMove = getSingleMove;
function getInfoPokemon(id) {
    var pokemonRawData = getSinglePokemon(id);
    pokemonRawData.then(function (res) {
        var pokemonInfo = {
            name: '',
            id: 0,
            moves: [],
            types: []
        };
        var types = res.data.types;
        var processedTypes = getPokemonTypes(types);
        var moves = res.data.moves;
        var processedMoves = getRandomPokemonMoves(moves);
        pokemonInfo.name = res.data.name;
        pokemonInfo.id = res.data.id;
        pokemonInfo.moves = processedMoves;
        pokemonInfo.types = processedTypes;
        console.log(pokemonInfo);
        return pokemonInfo;
    })
        .catch(function (error) {
        console.log(error);
    });
}
exports.getInfoPokemon = getInfoPokemon;
function getPokemonTypes(types) {
    var pokemonTypes = [];
    types.forEach(function (type) {
        pokemonTypes.push(type.type);
    });
    return pokemonTypes;
}
exports.getPokemonTypes = getPokemonTypes;
function getRandomPokemonMoves(moves) {
    var pokemonMoves = [];
    moves.forEach(function (move) {
        pokemonMoves.push(move.move);
    });
    var filteredPokemonMoves = [];
    var randomIndexes = getRandomNumbers(POKEMON_MOVES, moves.length);
    for (var i = 0; i < randomIndexes.length; i++) {
        var moveIndex = randomIndexes[i];
        filteredPokemonMoves.push(pokemonMoves[moveIndex]);
    }
    return filteredPokemonMoves;
}
exports.getRandomPokemonMoves = getRandomPokemonMoves;
function getRandomNumbers(quantity, max) {
    var randomNumbers = [];
    while (randomNumbers.length < quantity) {
        var randomNum = Math.floor(Math.random() * (max));
        if (randomNumbers.indexOf(randomNum) === -1 && randomNum !== 0) {
            randomNumbers.push(randomNum);
        }
    }
    return randomNumbers;
}
exports.getRandomNumbers = getRandomNumbers;
function getNewPokemons(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.listOfIds = getRandomNumbers(TEAM_SIZE, NUMBER_OF_POKEMONS);
            return _this;
        }
        return class_1;
    }(constructor));
}
var Pokemon = /** @class */ (function () {
    function Pokemon(pokemonResult) {
        this.name = '';
        this.id = 0;
        this.moves = [];
        this.types = [];
        this.buildFieldsPokemon(pokemonResult);
    }
    Pokemon.prototype.buildFieldsPokemon = function (pokemon) {
        this.name = pokemon.name;
        this.id = pokemon.id;
        this.types = getPokemonTypes(pokemon.types);
        this.moves = getRandomPokemonMoves(pokemon.moves);
    };
    Pokemon.prototype.getFullPokemonMoves = function (moves) {
        return __awaiter(this, void 0, void 0, function () {
            var baseMoves, listMoves, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        baseMoves = getRandomPokemonMoves(moves);
                        listMoves = baseMoves.map(function (move) { return getSingleMove(move.url); });
                        return [4 /*yield*/, Promise.all(listMoves)];
                    case 1:
                        results = _a.sent();
                        results.forEach(function (result, i) {
                            var fullMove = {
                                name: result.data.name,
                                url: baseMoves[i].url,
                                type: result.data.type,
                                damage: result.data.power,
                                powerPoints: result.data.pp,
                                accuracy: result.data.accuracy
                            };
                            _this.moves.push(fullMove);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    Pokemon.prototype.displayInfo = function () {
        console.log("==========================");
        console.log("".concat(this.id, " ").concat(this.name));
        console.log("\nTypes:");
        this.types.forEach(function (type) {
            console.log("- ".concat(type.name));
        });
        console.log("\nMoves:");
        this.moves.forEach(function (move) {
            console.log("- ".concat(move.name));
        });
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
var PokemonTrainer = /** @class */ (function () {
    function PokemonTrainer(name) {
        this.pokemons = [];
        this.listOfIds = [2, 4];
        this.name = name;
    }
    PokemonTrainer.prototype.getPokemons = function () {
        return __awaiter(this, void 0, void 0, function () {
            var listPokemons, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listPokemons = this.listOfIds.map(function (id) { return getSinglePokemon(id); });
                        return [4 /*yield*/, Promise.all(listPokemons)];
                    case 1:
                        results = _a.sent();
                        results.forEach(function (result) {
                            _this.pokemons.push(new Pokemon(result.data));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer.prototype.showTeam = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getPokemons()];
                    case 1:
                        _a.sent();
                        console.log('Trainer:', this.name);
                        this.pokemons.forEach(function (pokemon) {
                            pokemon.displayInfo();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PokemonTrainer = __decorate([
        getNewPokemons,
        __metadata("design:paramtypes", [String])
    ], PokemonTrainer);
    return PokemonTrainer;
}());
exports.PokemonTrainer = PokemonTrainer;
