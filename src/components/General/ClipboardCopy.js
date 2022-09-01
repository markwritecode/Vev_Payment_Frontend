import { Link1 } from 'iconsax-react';
import { useState } from 'react'

const ClipboardCopy = ({ copyText }) => {
    const [isCopied, setIsCopied] = useState(false)

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
            return await navigator.clipboard.writeText(text);
        } else {
            return document.execCommand('copy', true, text);
        }
    }

    const handleCopyClick = () => {
        copyTextToClipboard(copyText)
            .then(() => {
                setIsCopied(true);
                setTimeout(() => {
                    setIsCopied(false);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <button onClick={(e) => {
            e.preventDefault()
            handleCopyClick()
        }} className='text-[#F3724F] px-[32px] py-[16px] text-base flex items-center gap-2'>
            <Link1 className='rotate-45' />
            <span>{isCopied ? 'Copied!' : 'Copy'} link</span>
        </button>
    );
}

export default ClipboardCopy