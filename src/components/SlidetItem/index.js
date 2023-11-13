import React from "react";

import { 
    Container,
    BannerItem,
    Title,
    RateContainer,
    Rate
} from "./styles";

import { Ionicons } from '@expo/vector-icons'

function SliderItem(){
    return(
        <Container activeOpacity={0.7}>
            <BannerItem
                source={{ uri: 'https://plus.unsplash.com/premium_photo-1682125771198-f7cbed7cb868?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}} 
            />

            <Title numberOfLines={1}>Vingadores Vingadores</Title>
            <RateContainer>
                <Ionicons name="md-star" size={12} color="E7A74E" />
                <Rate>9/10</Rate>
            </RateContainer>
        </Container>
    );
}

export default SliderItem;