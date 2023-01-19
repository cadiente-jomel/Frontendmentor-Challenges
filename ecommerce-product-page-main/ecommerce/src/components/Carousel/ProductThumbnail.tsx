import { useState } from 'react';
import styled from 'styled-components';

interface ProductThumbnailProps {
    setImgIndex: Function
}

interface ProductThumbnailStyledProps {
    imageIdx: number,
    currentIdx: number
}

const S = {
    Container: styled.div`
        display:flex;
        justify-content: space-between;
        margin-top: 2rem;

        @media all and (max-width: 770px) {
            display: none;
        }
    `,
    ImageThumbnail: styled.img`
        width: 8rem; 
        border-radius: 2rem;
        &:hover {
            filter: opacity(.7);
        }
        border: ${({ imageIdx, currentIdx }: ProductThumbnailStyledProps) => imageIdx == currentIdx ? "3px solid var(--color-primary-darker)" : "none"};
        filter: ${({ imageIdx, currentIdx }: ProductThumbnailStyledProps) => imageIdx == currentIdx ? "opacity(.7)" : "opacity(1)"};
    `
}

export default (props: ProductThumbnailProps) => {
    const [imageIdx, setImageIdx] = useState(0);
    const assets = [
        {
            id: 1,
            src: "assets/images/image-product-1-thumbnail.jpg",
            alt: "product-thumbnail-1"
        },
        {
            id: 2,
            src: "assets/images/image-product-2-thumbnail.jpg",
            alt: "product-thumbnail-2"
        },
        {
            id: 3,
            src: "assets/images/image-product-3-thumbnail.jpg",
            alt: "product-thumbnail-3"
        },
        {
            id: 4,
            src: "assets/images/image-product-4-thumbnail.jpg",
            alt: "product-thumbnail-4"
        },
    ]
    const handleChange = (e: any) => { 
        setImageIdx(e.target.dataset.key);
        props.setImgIndex(e.target.dataset.key);
    }

    return (
        <S.Container>
            {
                assets.map(asset => (
                        <S.ImageThumbnail 
                            currentIdx={imageIdx} 
                            imageIdx={asset.id} 
                            onClick={(e: any) => {handleChange(e)}} 
                            key={asset.id} 
                            data-key={asset.id} 
                            src={asset.src} 
                            alt={asset.alt}
                        />
                ))
            }
        </S.Container>
    )
}