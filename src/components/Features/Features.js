import React from 'react'
import { ReactComponent as BeautyIcon} from '../../assets/icons/beauty.svg';
import { ReactComponent as DeliveryIcon} from '../../assets/icons/delivery.svg';
import { ReactComponent as FashionIcon} from '../../assets/icons/fashion.svg';
import { ReactComponent as HomeIcon} from '../../assets/icons/home.svg';
import { ReactComponent as MartIcon} from '../../assets/icons/mart.svg';

export default function Features() {

  const features = [
    {
        name: 'Alzaf Mart',
        icon: <MartIcon />
    },
    {
        name: 'Fashion',
        icon: <FashionIcon />
    },
    {
        name: 'Beauty',
        icon: <BeautyIcon />
    },
    {
        name: 'Home Makeover',
        icon: <HomeIcon />
    },
    {
        name: 'Free Delivery',
        icon: <DeliveryIcon />
    }
  ]

  return (
    <div className='flex justify-between my-4'>
        {
            features.map(feature => <div key={feature.name}>
                <div className='bg-white rounded-full w-14 h-14 flex justify-center items-center mx-auto'>
                    {feature.icon}
                </div>
                <span className="text-center text-xs">{feature.name}</span>
            </div>)
        }
    </div>
  )
}
