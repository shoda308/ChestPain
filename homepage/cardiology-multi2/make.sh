UNI=TOKAI
UNI=KINDAI
MODE=WKAKUTEI
MODE=WOKAKUTEI
BUILD=DEBUG
#BUILD=BUILD


if [ ${UNI} = "KINDAI" ]; then
URL="https://ci02.info.kindai.ac.jp/CardiologyData/indexUI.kindai.php" # for kindai uni
fi

if [ ${UNI} = "TOKAI" ]; then
URL="https://ci02.info.kindai.ac.jp/CardiologyData/indexTokai.php" # for tokai uni
fi

if [ ${BUILD} = "DEBUG" ]; then
URL="https://ci02.info.kindai.ac.jp/CardiologyData/indexUI.kindai.php" # for debug
fi

gpp -D${UNI} src/AppForEdit.vue > src/App.vue
gpp -D${UNI} -D__URL__=${URL} -D${BUILD} src/components/forms/HeadersForEdit.js > src/components/forms/Headers.js
gpp -D${MODE} src/router/indexForEdit.js > src/router/index.js

if [ ${BUILD} = "DEBUG" ]; then
npm run dev
else
npm run build
fi
