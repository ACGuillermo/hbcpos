import {
  ShieldExclamationIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import * as React from 'react';

import { Button } from '~/components/Elements/Button';
import { Dialog, DialogTitle } from '~/components/Elements/Dialog';
import { useDisclosure } from '~/hooks/useDisclosure';

export type ConfirmationDialogProps = {
  triggerButton: React.ReactElement;
  confirmButton: React.ReactElement;
  title: string;
  cancelButtonText?: string;
  icon?: 'danger' | 'info';
  isDone?: boolean;
  children?: React.ReactNode;
  body?: string;
};
export const ConfirmationModal = ({
  triggerButton,
  confirmButton,
  title,
  cancelButtonText = 'Cancel',
  icon = 'danger',
  isDone = false,
  children,
  body,
}: ConfirmationDialogProps) => {
  const { close, open, isOpen } = useDisclosure();

  const cancelButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (isDone) {
      close();
    }
  }, [isDone, close]);

  const trigger = React.cloneElement(triggerButton, {
    onClick: open,
  });

  return (
    <>
      {trigger}
      <Dialog isOpen={isOpen} onClose={close} initialFocus={cancelButtonRef}>
        <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <DialogTitle
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {title}
              </DialogTitle>
              <div className="mt-2">
                {body !== null && (
                  <p className="text-sm text-gray-500">{body}</p>
                )}

                {children !== null && children}
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <Button
              type="button"
              variant="primary"
              className="inline-flex w-full justify-center rounded-md border focus:ring-1 focus:ring-indigo-500 focus:ring-offset-1 sm:mt-0 sm:w-auto sm:text-sm"
              onClick={close}
              ref={cancelButtonRef}
            >
              {cancelButtonText}
            </Button>
            {confirmButton}
          </div>
        </div>
      </Dialog>
    </>
  );
};
