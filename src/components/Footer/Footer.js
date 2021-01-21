import React from 'react'
import FooterTab from '../Footer/FooterTab';
import FooterData from '../Footer/FooterData';
import styles from './style'
import Colors from '../../common/Colors';
import { Actions } from 'react-native-router-flux';
import {
    View,
    FlatList,
} from 'react-native'
class AppFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: FooterData
        }
    };
    componentWillMount() {
        const { heading } = this.props;
        const { data } = this.state;
        var dataClone = data;
        dataClone.map((v, i) => {
            dataClone[i].color = Colors.shade
        })
        let index = dataClone.findIndex(x => x.title === heading);
        data[index].color = Colors.secondary
        this.setState({ data: dataClone })
    }
    render() {
        const { data } = this.state
        return (
            <View style={styles.footerContainer}>
                <FlatList
                    horizontal={true}
                    data={data}
                    renderItem={({ item }) => (
                        <FooterTab
                            id={item.id}
                            title={item.title}
                            iconName={item.iconName}
                            color={item.color}
                            func={(index) => {
                                Actions[item.route]()
                            }}
                            keyExtractor={item => item.id}
                        />
                    )}
                />
            </View>
        );
    }
}
export default (AppFooter);