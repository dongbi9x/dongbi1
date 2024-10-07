Setting for Vest.ai (1x RTX A5000)

```
git clone https://github.com/iamnolimit/sui_meta_miner.git
cd sui_meta_miner
npm install
```

#### Run it

Miner supports both META and FOMO coins:

```
node mine.js --meta --chain=mainnet --phrase="secretphrase"
node mine.js --fomo --chain=mainnet --phrase="secretphrase"
```

Mining both (META + FOMO):

```
node mine.js --fomo --meta --chain=mainnet --phrase="secretphrase"

```

Credits:
[Meta](https://github.com/suidouble/sui_meta)
