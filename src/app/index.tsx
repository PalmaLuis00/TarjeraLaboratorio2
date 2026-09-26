import { Pressable, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          width: '90%',
          padding: 25,
          margin: 10,
          alignItems: 'center',
          backgroundColor: '#eeeeee',
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Lista de tareas
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            margin: 5,
          }}
        >
          Luis Mario Najarro Palma
        </Text>

        <Text style={{ margin: 5 }}>
          septiembre 29, 2026
        </Text>

        <Text style={{ margin: 5 }}>
          Responsable
        </Text>

        <Pressable
          style={{
            padding: 12,
            margin: 15,
            backgroundColor: '#333333',
            borderRadius: 8,
          }}
          onPress={() => alert('Crear nueva tarea')}
        >
          <Text style={{ color: 'white' }}>
            Nueva tarea
          </Text>
        </Pressable>

        <Pressable
          style={{
            padding: 12,
            margin: 15,
            backgroundColor: '#333333',
            borderRadius: 8,
          }}
          onPress={() => alert('Perfil seleccionado')}
        >
          <Text style={{ color: 'white' }}>
            Editar tarea
          </Text>
        </Pressable>
      </View>
    </View>
  );
}