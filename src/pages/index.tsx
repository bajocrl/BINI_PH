import { Image } from '@/components/Image';
import { biniPhotos } from '@/assets/biniPhotos';

import { Modal, ModalOpen, ModalContent } from '@/components/Modal';
import { Button } from '@/components/Button';

export function Page() {
  return (
    <div
      className='relative bg-cover bg-center bg-opacity-10 min-h-screen'
      style={{ backgroundImage: `url('/bloombilya.jpg')` }}
    >
      <div className='absolute inset-0 bg-rose-50 opacity-85'>
        <small className='absolute bottom-0 tracking-widest text-gray-950 [writing-mode:vertical-rl] transform rotate-180 opacity-70 py-4'>
          bg: @hellobloom8
        </small>
      </div>
      <div className='max-w-[85rem] w-full mx-auto p-6 pt-10 lg:pt-28'>
        <div className='flex flex-col-reverse gap-10 lg:flex-col'>
          <div className='columns-2 sm:columns-4 lg:columns-8 gap-4 space-y-4 items-center'>
            {biniPhotos.map((member) => (
              <div
                key={member.id}
                className='flex items-center justify-center group relative'
              >
                <Modal>
                  <ModalOpen className='absolute inset-0 z-50' />
                  <div className='w-[180px] h-[100px] sm:h-[350px] relative overflow-hidden md:pt-7 rounded cursor-pointer transition-colors duration-500 hover:outline hover:outline-rose-600'>
                    <Image
                      src={member.src}
                      className='object-left md:scale-[1.3] duration-300 group-hover:scale-[1.1] group-hover:sm:scale-[1.32] group-hover:sm:pt-5 group-hover:lg:pt-0 group-hover:lg:scale-[1.4]'
                    />
                  </div>
                  <h6 className='font-headerFont text-2xl absolute bottom-0 hidden group-hover:block text-rose-50 drop-shadow-sm'>
                    {member.name}
                  </h6>
                  <ModalContent className='max-w-lg w-full h-[400px] p-6 bg-rose-50 rounded overflow-hidden'>
                    <div className='absolute top-0 left-0 w-4/12 h-full z-[-1]'>
                      <Image src={member.cover} />
                    </div>
                    <div className='absolute top-0 left-0 w-4/12 h-full bg-gray-900/40' />
                    <div className='w-7/12 ml-[10.5rem] space-y-6'>
                      <h3 className='text-xl text-rose-600 font-headerFont font-bold'>
                        {member.full}
                      </h3>
                      <p className='tracking-wide'>{member.data}</p>
                      <Button className='bg-rose-500 text-rose-50 px-4 py-2 text-sm'>
                        <a href={member.link}>Learn more...</a>
                      </Button>
                    </div>
                  </ModalContent>
                </Modal>
              </div>
            ))}
          </div>
          <div className='flex flex-col items-center justify-center z-50'>
            <h1 className='font-headerFont text-9xl text-rose-600 font-bold'>
              Bini
            </h1>
            <p className='opacity-90 tracking-wider text-lg'>
              Walo hanggang dulo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
