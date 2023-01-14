import {useState} from 'react';
import * as S from './ProductThumbnail.style';


const handleChange = (e: any, setImgIndex: any) => {

    const els = Array.from(e.target.parentElement.children);
    els.forEach((el: any) => {
        el.classList.contains("img-selected");
        el.classList.remove("img-selected");
    })
    setImgIndex(e.target.dataset.key);
    e.target.classList.add("img-selected");
}


export default (props: any) => {
    return (
        <S.Container>
            <S.ImageThumbnail onClick={(e: any) => {handleChange(e, props.setImgIndex)}}data-key={1} src="/assets/images/image-product-1-thumbnail.jpg"/>
            <S.ImageThumbnail onClick={(e: any) => {handleChange(e, props.setImgIndex)}}data-key={2} src="/assets/images/image-product-2-thumbnail.jpg"/>
            <S.ImageThumbnail onClick={(e: any) => {handleChange(e, props.setImgIndex)}}data-key={3} src="/assets/images/image-product-3-thumbnail.jpg"/>
            <S.ImageThumbnail onClick={(e: any) => {handleChange(e, props.setImgIndex)}}data-key={4} src="/assets/images/image-product-4-thumbnail.jpg"/>
        </S.Container>
    )
}