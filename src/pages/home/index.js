import React from "react";
import { ScrollView } from 'react-native';

import { 
    Container, 
    SearchContainer, 
    Input, 
    SearchButton, 
    Title, 
    BannerButton, 
    Banner,
    SliderMovie 
} from './styles'
import { Feather } from '@expo/vector-icons'

import Header from "../../components/Header";
import SliderItem from "../../components/SlidetItem";

function Home(){
    return (
        <Container>
            <Header title="React Prime" />
            
            <SearchContainer>
                <Input 
                placeholder= "Ex Vingadores"
                placeholderTextColor="#ddd" 
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF" />
                </SearchButton>
            </SearchContainer>

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em cartaz</Title>
                <BannerButton activeOpacity={0.9} onPress={ () => alert("Test")}>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                    />
                </BannerButton>

                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem /> }
                />

                <Title>Populares</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem /> }
                />

                <Title>Mais votados</Title>
                <SliderMovie 
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={ ({item}) => <SliderItem /> }
                />

            </ScrollView>

        </Container>
    )
}

export default Home;