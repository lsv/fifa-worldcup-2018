# FIFA Worldcup 2018 - json data

[![Build Status](https://travis-ci.org/lsv/fifa-worldcup-2018.svg?branch=master)](https://travis-ci.org/lsv/fifa-worldcup-2018)

## Usage

To use the data in your app, you can use this link

`
https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json
`

Which will be updated

## Data explanation

### Match types

#### group

Means its a regular group match

#### qualified

Means it should look at the `home_team` and `away_team` fields where the code will be either `winner_X` or `runner_X` where `X` = the group key.

Eg: `winner_h` means the team will be the winner of the group H. `runner_b` means the team will be second placed team in the group B.

#### winner

`home_team` and `away_team` will be a integer, meaning it should take the winner of the match.

Eg: `home_team = 59` - means the winning team from match 59 will be the `home_team`

#### loser

The opposite of the winner key (Only used for 3rd place play-off)

Eg: `home_team = 62` means the losing team from match 62 will be the `home_team`

#### TV Channels

Each match has a array of channels. The tv channels will be defined in the json file aswell.

#### Knockout matches

Knockout matches can not end in a draw, so therefor a knockout match have the following

```
"home_result": null,
"away_result": null,
"home_penalty": null,
"away_penalty": null,
"winner": null,
```

When a match is completed it will look like this

```
"home_result": 0,
"away_result": 1,
"home_penalty": null,
"away_penalty": null,
"winner": "away",
```

The `"winner"` field will have either `"away"` or `"home"`.

If a team wins after overtime, the result will be the same as above.

If a knockout match goes to penalty the result will be 

```
"home_result": 1,
"away_result": 1,
"home_penalty": 5,
"away_penalty": 4,
"winner": "home",
```

## Frontend

Not very nice, but works - and you can try to see what happens with your expected results

https://github.com/lsv/fifa-worldcup-2018-jsfrontend

https://worldcup.aarhof.eu/#/

## Todo

- More TV channels(?) - Need help from anywhere on the world :)
