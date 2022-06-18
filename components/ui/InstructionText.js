import { StyleSheet, Text } from 'react-native';
import Colors from '../../constants/colors';

function InstructionText({ children }) {
    return <Text style={styles.instructionText}>{children}</Text>;
}

const styles = StyleSheet.create({
    instructionText: {
        color: Colors.accent500,
        fontSize: 24,
        fontFamily: 'PoppinsBold',
    },
});

export default InstructionText;
