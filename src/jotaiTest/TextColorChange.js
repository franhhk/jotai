import { Provider, atom, useAtom } from 'jotai';

const getRandomFruit = () => {
  const fruitList = ['사과', '딸기', '배'];
  return fruitList[Math.floor(Math.random() * fruitList.length)];
};

const getRandomColor = () => {
  const colorList = ['red', 'blue', 'break', 'green'];
  return colorList[Math.floor(Math.random() * colorList.length)];
};

// atom 생성
const titleAtom = atom(getRandomFruit());
const colorAtom = atom(getRandomColor());

const Header = () => {
  console.log('Header ---------------');
  // setter
  const [, setTitle] = useAtom(titleAtom);
  const [, setColor] = useAtom(colorAtom);

  const handleClickTitle = () => {
    setTitle(getRandomFruit());
  };
  const handleClickColor = () => {
    setColor(getRandomColor());
  };

  return (
    <div>
      <button onClick={handleClickTitle}>change title</button>
      <button onClick={handleClickColor}>change color</button>
    </div>
  );
};

const Title = () => {
  // color 변경시 title 영역은 리런더링 되지 않는다.
  console.log('Title ---------------');
  const [title] = useAtom(titleAtom);
  return <h2>{title}</h2>;
};

const Color = () => {
  // title 변경시 color 영역은 리런더링 되지 않는다.
  console.log('Color ---------------');
  const [backgroundColor] = useAtom(colorAtom);
  return <div style={{ backgroundColor, width: 50, height: 50 }} />;
};

const Text = () => {
  console.log('Text ---------------');
  return <></>;
};

export default function TextColorChange() {
  console.log('TextColorChange ------------------');
  return (
    <div>
      <Provider>
        <Header />
        <div>
          <Title />
          <Color />
          <Text />
        </div>
      </Provider>
    </div>
  );
}
