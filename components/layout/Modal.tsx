import { FunctionComponent, ReactNode } from "react"

interface Props {
    shouldShowModal: boolean;
    onRequestClose: () => void;
    children?: ReactNode | undefined;
}

const Modal: FunctionComponent<Props> = ({ shouldShowModal, onRequestClose, children }) => {
    return (
        shouldShowModal ? (
            // modal background
            <div className="fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.5)]" onClick={onRequestClose}>
                {/* modal body */}
                <div className="bg-white m-10 p-5 w-1/2" onClick={e => e.stopPropagation()}>
                    <button
                        type="button"
                        className="px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={onRequestClose}> Hide Modal </button>
                    {children}
                </div>
            </div>
        ): null
    )
}
export default Modal