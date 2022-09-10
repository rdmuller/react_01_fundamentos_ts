import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

// nos parÂmetros, utilizar entre chaves, ao invés de props, se chama desestruturação
// foi necessário adicionar o props porque a interface herda os atributos de ImgHTMLAttributes
export function Avatar({hasBorder = true, ...props }:AvatarProps) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    );
}