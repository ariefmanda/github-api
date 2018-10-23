import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')


let style = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: width * 0.025,
    height: height * 0.075,
    backgroundColor: '#4d6f8c',
    justifyContent: 'space-between',
  },
  welcome: {
    color: '#ffffff',
    paddingVertical: height * 0.02,
    fontSize: width * 0.04,
    justifyContent: 'center',
  },
  subheader: {
    paddingHorizontal: width * 0.025,
    height: height * 0.075,
    backgroundColor: '#bfbfbf',
    justifyContent: 'space-between',
  },
  formInput: {
    color: "#ffffff",
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.09,
    backgroundColor: "#b7d7e0",
    marginBottom: height * 0.01,
  },
  iconMenu: (param)=>({
    fontSize: width * 0.05,
    color: '#FFFFFF',
    paddingLeft: param ? width * 0.01 : 0,
    paddingRight: height * 0.01,
    paddingVertical: height * (param ? 0.03 : 0.02),
  }),
  listLeft: {
    flexDirection: 'row',
  },
  listText: {
    paddingVertical: height * 0.025,
    fontSize: width * 0.04,
    justifyContent: 'center',
    color: "#5996aa"
  }
}

export default style