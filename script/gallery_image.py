from PIL import Image, ImageOps


def add_license(img: Image):
    img_exif = img.getexif()

    img_exif[0x013B] = "Picture made by @vortezz.dev"
    img_exif[0x8298] = "This picture is licensed under CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/)"

    return img_exif


if __name__ == "__main__":
    print("Enter image name:")
    id = input()

    im = Image.open(f"{id}.jpg").convert("RGB")
    im = ImageOps.exif_transpose(im)

    meta_free = Image.new(im.mode, im.size)
    meta_free.putdata(list(im.getdata()))

    meta_free.save(f"{id}.jpg", exif=add_license(meta_free))

    width = im.width
    height = im.height

    target_width = 724
    target_height = height * target_width / width

    im = im.resize((target_width, round(target_height)), Image.NEAREST)
    im.save(f"{id}-compressed.webp", "webp", exif=add_license(im))

    im = Image.open(f"{id}.jpg").convert("RGB")

    width = im.width
    height = im.height

    target_width = 2048
    target_height = height * target_width / width

    im = im.resize((target_width, round(target_height)), Image.NEAREST)
    im.save(f"{id}.webp", "webp", exif=add_license(im))
