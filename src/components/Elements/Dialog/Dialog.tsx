import { Dialog as UIDialog, Transition } from '@headlessui/react';
import * as React from 'react';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  initialFocus?: React.MutableRefObject<null>;
  size?: keyof typeof sizes;
  className?: string;
};

export const DialogTitle = UIDialog.Title;

export const DialogDescription = UIDialog.Description;

const sizes = {
  sm: 'w-1/2 lg:w-1/3 xl:w-2/5 max-w-lg',
  md: 'w-2/5 lg:w-2/3 xl:w-1/2 max-w-xl',
  lg: 'w-4/5 lg:w-3/4 xl:w-1/2 max-w-2xl',
};

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  children,
  initialFocus,
  size,
  className = '',
}) => {
  return (
    <>
      <Transition.Root show={isOpen} as={React.Fragment}>
        <UIDialog
          as="div"
          static
          className="fixed inset-0 z-10 flex h-screen min-h-screen items-center justify-center overflow-y-auto"
          open={isOpen}
          onClose={onClose}
          initialFocus={initialFocus}
        >
          <div className="w-full px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <UIDialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                className={`inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:p-6 sm:align-middle ${
                  size ? sizes[size] : ''
                } ${className}`}
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </UIDialog>
      </Transition.Root>
    </>
  );
};
