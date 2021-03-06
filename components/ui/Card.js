import { Dimensions, StyleSheet, View } from 'react-native';
import Colors from '../../constants/colors';

function Card({ children }) {
    return <View style={styles.card}>{children}</View>;
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 24,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: deviceWidth < 380 ? 18 : 36,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        shadowOpacity: 1,
    },
});

export default Card;
