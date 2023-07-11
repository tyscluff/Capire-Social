import React,{ useState, useEffect } from 'react';
import { View, TouchableOpacity, Keyboard, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { standardBlue } from '../../constants/styling';

const NavBar = ({ state, descriptors, navigation }) => {

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    if (Platform.OS === "android") {
      const keyboardShowListener = Keyboard.addListener('keyboardDidShow', () => {
        setKeyboardVisible(true);
      });
  
      const keyboardHideListener = Keyboard.addListener('keyboardDidHide', () => {
        setKeyboardVisible(false);
      });
  
      return () => {
        keyboardShowListener.remove();
        keyboardHideListener.remove();
      };
    }
  }, []);

  const footerStyles = { 
    flexDirection: "row",
    width: "100%", 
    height: "8%", 
    justifyContent: "space-around", 
    alignItems: "flex-start", 
    backgroundColor: "white", 
    borderTopColor: "#DCDCDC", 
    borderTopWidth: 2,
  };

  if (keyboardVisible) return false;

  return (
    <View style={footerStyles}>
        {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label = 
            options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;  

            const isFocused = state.index === index;

            const onPress = () => {
                const event = navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  // The `merge: true` option makes sure that the params inside the tab screen are preserved
                  navigation.navigate({ name: route.name, merge: true });
                }
              };
      
              const onLongPress = () => {
                navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              };

              const styles = { 
                shadowColor: "#A9A9A9", 
                shadowOffset: { 
                    width: 2, height: 4
                }, 
                shadowOpacity: 2, 
                shadowRadius: 4 
              }
      
              return (
                <TouchableOpacity
                  accessibilityRole="button"
                  accessibilityState={isFocused ? { selected: true } : {}}
                  accessibilityLabel={options.tabBarAccessibilityLabel}
                  testID={options.tabBarTestID}
                  onPress={onPress}
                  onLongPress={onLongPress}
                  style={{ marginTop: "2%" }}
                  key={label}
                >
                {label === "Find" ? 
                    <Ionicons 
                    name="search" 
                    size={34} 
                    color={isFocused ? standardBlue : "black"}
                    style={isFocused ? styles : null}
                    />
                    :
                    label === "Streams" ?
                    <Feather 
                    name="message-circle" 
                    size={34} 
                    color={isFocused ? standardBlue : "black"}
                    style={isFocused ? styles : null}
                    />
                    :
                    label === "Settings" ?
                    <Ionicons 
                    name="settings-outline"
                    size={34}
                    color={isFocused ? standardBlue : "black"}
                    style={isFocused ? styles : null}
                    />
                    :
                    label
                }
                </TouchableOpacity> 
            );
        })}
    </View>
  )
}

export default NavBar