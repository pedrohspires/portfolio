import { MouseEventHandler } from 'react'
import { MdOutlineMenu } from 'react-icons/md'
import classNames from '../utils/classNames'

function Navbar({ onClickMenu, className }: { onClickMenu: MouseEventHandler<SVGElement>, className?: string }) {
    return (
        <div className={classNames('bg-primary-dark p-4 flex justify-between items-center', className)}>
            <MdOutlineMenu className="w-8 h-8" onClick={onClickMenu} />

            <div className="rounded-full aspect-square w-10 overflow-hidden">
                <img
                    src="/images/profile.jpg"
                    alt="Foto de perfil de Pedro Henrique"
                    className="object-contain"
                />
            </div>
        </div>
    )
}

export default Navbar