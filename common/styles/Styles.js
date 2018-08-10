import { Colours } from './';

const styles = {
  container: {
    margin: '40px',
    textAlign: 'center',
    backgroundColor: Colours.common.backgroundColor
  },
  content: {
    textAlign: 'center'
  },
  wrapper: {
    margin: '10px',
    padding: '25px',
    alignItems: 'center',
    borderRadius: '15px',
    backgroundColor: Colours.common.white
  },
  text: {
    fontSize: '12px',
    marginTop: '15px',
    marginBottom: '15px',
    textAlign: 'center',
    backgroundColor: Colours.common.backgroundColor
  },
  ul: {
    width: '40%'
  },
  li: {
    padding: '10px',
    marginTop: '20px',
    borderRadius: '15px',
    backgroundColor: Colours.common.white
  },
  itemContainer: {
    flex: 1,
    height: '58px',
    flexDirection: 'row',
    alignItems: 'center',
    display: '-webkit-box',
    justifyContent: 'center'
  },
  rowElement: {
    flex: 1
  },
  avatar: {
    flex: 1,
    verticalAlign: 'middle',
    width: '50px',
    marginLeft: '20px',
    alignSelf: 'center',
    borderRadius: '50%'
  }
};

export default styles;
