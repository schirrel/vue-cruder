cd ..
cd packages/ui
echo "At packages/ui"
echo "Start Build"
yarn build
echo "At packages/ui"
cd ..

echo "Replace ui at example"
sudo rm -R  example/node_modules/@vue-cruder/ui && cp -R ui example/node_modules/@vue-cruder  