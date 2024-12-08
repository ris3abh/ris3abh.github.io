import os
from PIL import Image
import argparse

def resize_images(folder_path, size):
    """
    Resizes all PNG and JPG images in the specified folder to the given size.
    
    Args:
        folder_path (str): Path to the folder containing images.
        size (tuple): Desired size for the images (width, height).
    """
    if not os.path.isdir(folder_path):
        print(f"Error: The folder '{folder_path}' does not exist.")
        return

    for file_name in os.listdir(folder_path):
        file_path = os.path.join(folder_path, file_name)
        
        # Check if the file is a PNG or JPG image
        if file_name.lower().endswith(('.png', '.jpg', '.jpeg')):
            try:
                with Image.open(file_path) as img:
                    # Resize image
                    resized_img = img.resize(size, Image.Resampling.LANCZOS)
                    # Save resized image back to the same file
                    resized_img.save(file_path)
                    print(f"Resized and saved: {file_name}")
            except Exception as e:
                print(f"Failed to process {file_name}: {e}")
        else:
            print(f"Skipped non-image file: {file_name}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Resize images in a folder to a specified size.")
    parser.add_argument("folder", type=str, help="Path to the folder containing images.")
    parser.add_argument("width", type=int, help="Width of the resized images.")
    parser.add_argument("height", type=int, help="Height of the resized images.")
    
    args = parser.parse_args()
    
    resize_images(args.folder, (args.width, args.height))
